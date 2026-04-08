const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(
  ".section-heading, .feature-card, .use-case-card, .step-card, .comparison-table-wrapper, .problem-panel, .trust-panel, .final-cta-card, .hero-copy, .hero-panel, .demo-hero-copy, .demo-stage-card"
);
const interestForms = document.querySelectorAll("[data-interest-form]");
const demoWorkflow = document.querySelector("[data-demo-workflow]");

revealItems.forEach((item) => {
  item.setAttribute("data-reveal", "");
});

const syncHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

interestForms.forEach((form) => {
  const successMessage = form.querySelector("[data-form-success]");

  form.addEventListener("submit", () => {
    window.setTimeout(() => {
      if (!successMessage) return;
      successMessage.hidden = false;
      form.reset();
    }, 350);
  });
});

if (demoWorkflow) {
  const STEP_TRANSITION_MS = 90;
  const STEP_DISPLAY_MS = 1850;
  const demoStepLabel = demoWorkflow.querySelector("[data-demo-step-label]");
  const demoTitle = demoWorkflow.querySelector("[data-demo-title]");
  const demoCardTitle = demoWorkflow.querySelector("[data-demo-card-title]");
  const demoFields = demoWorkflow.querySelector("[data-demo-fields]");
  const demoObjectives = demoWorkflow.querySelector("[data-demo-objectives]");
  const demoTag = demoWorkflow.querySelector("[data-demo-tag]");
  const demoSummaryTitle = demoWorkflow.querySelector("[data-demo-summary-title]");
  const demoSummaryChips = demoWorkflow.querySelector("[data-demo-summary-chips]");
  const demoPerformanceTitle = demoWorkflow.querySelector("[data-demo-performance-title]");
  const demoBars = demoWorkflow.querySelector("[data-demo-bars]");
  const demoSideTitle = demoWorkflow.querySelector("[data-demo-side-title]");
  const demoSideList = demoWorkflow.querySelector("[data-demo-side-list]");
  const demoAlert = demoWorkflow.querySelector("[data-demo-alert]");
  const demoProgressTitle = demoWorkflow.querySelector("[data-demo-progress-title]");
  const demoRing = demoWorkflow.querySelector("[data-demo-ring]");
  const demoRingValue = demoWorkflow.querySelector("[data-demo-ring-value]");
  const demoProgressStrong = demoWorkflow.querySelector("[data-demo-progress-strong]");
  const demoProgressCopy = demoWorkflow.querySelector("[data-demo-progress-copy]");
  const demoGuidanceTitle = demoWorkflow.querySelector("[data-demo-guidance-title]");
  const demoGuidanceCopy = demoWorkflow.querySelector("[data-demo-guidance-copy]");
  const demoStepbar = demoWorkflow.querySelector("[data-demo-stepbar]");
  const demoKpiCompletion = demoWorkflow.querySelector("[data-demo-kpi-completion]");
  const demoKpiMode = demoWorkflow.querySelector("[data-demo-kpi-mode]");

  const createFieldMarkup = (fields) =>
    fields
      .map(
        (field) => `
          <div class="veeva-field${field.wide ? " veeva-field-wide" : ""}">
            <label>${field.label}</label>
            <div>${field.value}</div>
          </div>
        `
      )
      .join("");

  const createChipMarkup = (chips) =>
    chips
      .map(
        (chip) => `<span class="veeva-chip${chip.active ? " active" : ""}">${chip.label}</span>`
      )
      .join("");

  const createListMarkup = (items) => items.map((item) => `<li>${item}</li>`).join("");

  const createBarMarkup = (bars) =>
    bars
      .map(
        (bar) => `
          <div>
            <span>${bar.label}</span>
            <i><b style="width: ${bar.value}%"></b></i>
          </div>
        `
      )
      .join("");

  const setText = (node, value) => {
    if (node) node.textContent = value;
  };

  const setHtml = (node, value) => {
    if (node) node.innerHTML = value;
  };

  const steps = [
    {
      title: "Choose an Account",
      stepLabel: "Step 1 of 5",
      cardTitle: "Select the right account",
      fields: [
        { label: "Territory", value: "Midwest Cardio North" },
        { label: "Priority", value: "Tier 1 target" },
        { label: "Suggested account", value: "Springfield Health Clinic", wide: true },
      ],
      objectives: [
        { label: "Open account", active: true },
        { label: "Review history" },
        { label: "Confirm target" },
      ],
      tag: "Account selected",
      summaryTitle: "Current focus",
      summaryChips: [
        { label: "Open account", active: true },
        { label: "Review history" },
        { label: "Confirm target" },
      ],
      performanceTitle: "Preparation summary",
      bars: [
        { label: "Profile confidence", value: 24 },
        { label: "Workflow progress", value: 20 },
      ],
      sideTitle: "Choose the right account",
      sideList: [
        "Review account context before entering the workflow.",
        "Confirm the right clinic and target profile.",
      ],
      alert: "Ready to begin",
      progressTitle: "Today's progress",
      ringValue: "20%",
      ringProgress: 20,
      progressStrong: "1 / 5 steps completed",
      progressCopy: "The simulator tracks each milestone as the rep moves forward.",
      guidanceTitle: "Guided prompt",
      guidanceCopy: "Open the right account before the call plan begins.",
      mode: "Account Selection",
    },
    {
      title: "Log Call Details",
      stepLabel: "Step 2 of 5",
      cardTitle: "Enter call details",
      fields: [
        { label: "Account", value: "Springfield Health Clinic" },
        { label: "Call Date", value: "Aug 15, 2024" },
        { label: "Call Time", value: "3:00 PM" },
        { label: "Call Type", value: "In-Person" },
        { label: "Attendees", value: "Dr. Michael Harris", wide: true },
      ],
      objectives: [
        { label: "Discuss Product X", active: true },
        { label: "Leave Samples" },
        { label: "Share Study Data" },
      ],
      tag: "Details entered",
      summaryTitle: "Meeting objective",
      summaryChips: [
        { label: "Discuss Product X", active: true },
        { label: "Leave Samples" },
        { label: "Share Study Data" },
      ],
      performanceTitle: "Performance summary",
      bars: [
        { label: "Steps completed", value: 40 },
        { label: "Guidance followed", value: 55 },
      ],
      sideTitle: "Complete the call details",
      sideList: [
        "Fill out required fields to log a meeting with the clinic.",
        "Use the approved call type before continuing.",
      ],
      alert: "Complete all required fields",
      progressTitle: "Today's progress",
      ringValue: "40%",
      ringProgress: 40,
      progressStrong: "2 / 5 steps completed",
      progressCopy: "Progress updates live as learners move through each task.",
      guidanceTitle: "Guided prompt",
      guidanceCopy: "Confirm the right clinic, meeting time, and compliant call type.",
      mode: "Call Details",
    },
    {
      title: "Add Objectives",
      stepLabel: "Step 3 of 5",
      cardTitle: "Choose approved objectives",
      fields: [
        { label: "Primary message", value: "New dosing protocol overview" },
        { label: "Sample intent", value: "Discuss if requested" },
        { label: "Medical content", value: "Share approved study data only", wide: true },
      ],
      objectives: [
        { label: "Discuss Product X", active: true },
        { label: "Leave Samples", active: true },
        { label: "Share Study Data" },
      ],
      tag: "Objectives aligned",
      summaryTitle: "Selected objectives",
      summaryChips: [
        { label: "Discuss Product X", active: true },
        { label: "Leave Samples", active: true },
        { label: "Share Study Data" },
      ],
      performanceTitle: "Execution summary",
      bars: [
        { label: "Objective coverage", value: 62 },
        { label: "Compliance alignment", value: 74 },
      ],
      sideTitle: "Match the discussion plan",
      sideList: [
        "Only select objectives supported by approved materials.",
        "Keep the workflow aligned with the rep discussion guide.",
      ],
      alert: "Objectives verified",
      progressTitle: "Today's progress",
      ringValue: "60%",
      ringProgress: 60,
      progressStrong: "3 / 5 steps completed",
      progressCopy: "Managers can see where users hesitate or choose the wrong path.",
      guidanceTitle: "Guided prompt",
      guidanceCopy: "Choose only the objectives allowed for this account interaction.",
      mode: "Objective Mapping",
    },
    {
      title: "Review Compliance",
      stepLabel: "Step 4 of 5",
      cardTitle: "Run compliance checks",
      fields: [
        { label: "Disclosures", value: "Required acknowledgment added" },
        { label: "Sample policy", value: "No sample handoff recorded" },
        { label: "Content check", value: "Approved claim language confirmed", wide: true },
      ],
      objectives: [
        { label: "Disclosure added", active: true },
        { label: "Claim approved", active: true },
        { label: "Risk cleared", active: true },
      ],
      tag: "Compliance cleared",
      summaryTitle: "Compliance status",
      summaryChips: [
        { label: "Disclosure added", active: true },
        { label: "Claim approved", active: true },
        { label: "Risk cleared", active: true },
      ],
      performanceTitle: "Risk summary",
      bars: [
        { label: "Compliance readiness", value: 84 },
        { label: "Submission confidence", value: 81 },
      ],
      sideTitle: "Built for regulated workflows",
      sideList: [
        "Check mandatory disclosures before submission.",
        "Flag missing approvals before the rep can continue.",
      ],
      alert: "All checks passed",
      progressTitle: "Today's progress",
      ringValue: "80%",
      ringProgress: 80,
      progressStrong: "4 / 5 steps completed",
      progressCopy: "Audit-friendly checkpoints keep the workflow safe before submission.",
      guidanceTitle: "Guided prompt",
      guidanceCopy: "Use the simulator to reinforce compliant call behavior before go-live.",
      mode: "Compliance Review",
    },
    {
      title: "Submit and Score",
      stepLabel: "Step 5 of 5",
      cardTitle: "Finalize the workflow",
      fields: [
        { label: "Call status", value: "Ready to submit" },
        { label: "Completion time", value: "11 minutes" },
        { label: "Manager score", value: "94% workflow accuracy", wide: true },
      ],
      objectives: [
        { label: "Workflow complete", active: true },
        { label: "Score recorded", active: true },
        { label: "Reset ready", active: true },
      ],
      tag: "Submission complete",
      summaryTitle: "Outcome",
      summaryChips: [
        { label: "Workflow complete", active: true },
        { label: "Score recorded", active: true },
        { label: "Reset ready", active: true },
      ],
      performanceTitle: "Training results",
      bars: [
        { label: "Workflow accuracy", value: 94 },
        { label: "Readiness score", value: 91 },
      ],
      sideTitle: "Scenario completed",
      sideList: [
        "The rep finished the workflow with all required steps.",
        "The simulation resets automatically for the next learner.",
      ],
      alert: "Ready to loop",
      progressTitle: "Today's progress",
      ringValue: "100%",
      ringProgress: 100,
      progressStrong: "5 / 5 steps completed",
      progressCopy: "Once complete, the demo loops back to the start for continuous viewing.",
      guidanceTitle: "Guided prompt",
      guidanceCopy: "Review the result, capture the score, and restart the scenario.",
      mode: "Completion",
    },
  ];

  let currentStepIndex = 0;
  let demoLoopHandle;

  const renderStep = (stepIndex) => {
    const step = steps[stepIndex];

    demoWorkflow.classList.add("demo-is-transitioning");

    window.setTimeout(() => {
      try {
        setText(demoTitle, step.title);
        setText(demoStepLabel, step.stepLabel);
        setText(demoCardTitle, step.cardTitle);
        setHtml(demoFields, createFieldMarkup(step.fields));
        setHtml(demoObjectives, createChipMarkup(step.objectives));
        setText(demoTag, step.tag);
        setText(demoSummaryTitle, step.summaryTitle);
        setHtml(demoSummaryChips, createChipMarkup(step.summaryChips));
        setText(demoPerformanceTitle, step.performanceTitle);
        setHtml(demoBars, createBarMarkup(step.bars));
        setText(demoSideTitle, step.sideTitle);
        setHtml(demoSideList, createListMarkup(step.sideList));
        setText(demoAlert, step.alert);
        setText(demoProgressTitle, step.progressTitle);
        setText(demoRingValue, step.ringValue);
        setText(demoProgressStrong, step.progressStrong);
        setText(demoProgressCopy, step.progressCopy);
        setText(demoGuidanceTitle, step.guidanceTitle);
        setText(demoGuidanceCopy, step.guidanceCopy);
        setText(demoKpiCompletion, step.ringValue);
        setText(demoKpiMode, step.mode);

        if (demoRing) {
          demoRing.style.background = `conic-gradient(#72c5bc 0 ${Math.max(
            step.ringProgress - 12,
            0
          )}%, #e7c975 ${Math.max(step.ringProgress - 12, 0)}% ${step.ringProgress}%, rgba(114, 197, 188, 0.18) ${step.ringProgress}% 100%)`;
        }

        if (demoStepbar) {
          [...demoStepbar.children].forEach((bar, index) => {
            bar.classList.toggle("active", index <= stepIndex);
          });
        }
      } finally {
        demoWorkflow.classList.remove("demo-is-transitioning");
      }
    }, STEP_TRANSITION_MS);
  };

  const queueNextStep = () => {
    demoLoopHandle = window.setTimeout(() => {
      currentStepIndex = (currentStepIndex + 1) % steps.length;
      renderStep(currentStepIndex);
      queueNextStep();
    }, STEP_DISPLAY_MS);
  };

  renderStep(currentStepIndex);
  queueNextStep();

  window.addEventListener("beforeunload", () => {
    if (demoLoopHandle) window.clearTimeout(demoLoopHandle);
  });
}
