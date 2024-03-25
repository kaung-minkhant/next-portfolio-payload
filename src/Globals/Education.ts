import { GlobalConfig } from "payload/types";

const EducationGlobal: GlobalConfig = {
  slug: "education",
  access: {
    read: () => true,
  },
  label: "Education",
  fields: [
    {
      name: "transitionLength",
      type: "number",
      label: "Transition Length",
    },
    {
      name: "stepWidth",
      type: "number",
      label: "Step width in pixel",
    },
    {
      name: "stepHeight",
      type: "number",
      label: "Step height in pixel",
    },
    {
      name: "stepTransitionDuration",
      type: "number",
      label: "Step Transition Duration",
    },
    {
      name: "transitionDuration",
      type: "number",
      label: "Transition Duration",
    },
    {
      name: "mobileHeight",
      type: "number",
      label: "Mobile Height in Pixel",
    },
    {
      name: "steps",
      label: "Steps",
      type: "array",
      fields: [
        {
          name: "stepWidth",
          type: "number",
          label: "Step width in pixel",
        },
        {
          name: "stepHeight",
          type: "number",
          label: "Step height in pixel",
        },
        {
          name: "id",
          type: "text",
          label: "ID",
        },
        {
          name: "type",
          type: "select",
          options: ["STEP"],
          defaultValue: "STEP",
        },
        {
          name: "initialStep",
          type: "text",
          label: "Initial Animation for Step",
        },
        {
          name: "animateStep",
          type: "text",
          label: "Animation for Step",
        },
        {
          name: "animateDuration",
          type: "number",
          label: "Animation Duration for Step",
        },
        {
          name: "initialTransition",
          type: "text",
          label: "Initial Animation for Transition",
        },
        {
          name: "animateTransition",
          type: "text",
          label: "Animation for Transition",
        },
        {
          name: "transitionDuration",
          type: "number",
          label: "Transition Animation Duration",
        },
        {
          name: "contentOnAnimate",
          type: "text",
          label: "header content for each step",
        },
        {
          name: "mainContent",
          type: "text",
          label: "Main content for each step",
        },
        {
          name: "contentOnAnimatePosition",
          type: "select",
          label: "Content Position",
          options: ["top", "bottom"],
        },
        {
          name: "mobileTimelinePosition",
          type: "number",
          label: "Number of Pixcel from the top of timeline",
        },
        {
          name: "mobileScrollPosition",
          type: "number",
          label: "Scroll Position for the content on timeline (0-1)",
        },
      ],
    },
  ],
};

export default EducationGlobal;
