// Single source of truth for site content.
// Used by the page components, the AI mode panel, and the build step that writes llms.txt.

export const profile = {
  name: 'Sanika Chavan',
  role: 'Research Engineer',
  location: 'San Francisco Bay Area, CA',
  focus: ['Agentic Evaluation Design', 'Reinforcement Learning Environments', 'Post Training'],
  summary:
    'Specializing in scalable evaluation infrastructure, benchmarking, post training, and reproducibility for LLM and agentic systems, with experience in automated testing, metric design, and reliability analysis.',
  education: { degree: 'M.S. Computer Science', school: 'Arizona State University, Tempe, AZ', date: 'May 2025' },
  links: {
    email: 'sanikac10@gmail.com',
    github: 'https://github.com/sanikac10',
    linkedin: 'https://www.linkedin.com/in/sanika-chavan/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=oiOf9EsAAAAJ',
    x: 'https://x.com/chavan_sanika_',
    website: 'https://sanikac10.github.io/my-portfolio/',
  },
};

// venue: only set for accepted papers. Workshops use the WORKSHOP@CONF short form.
// Papers without a venue show just the year.
export const publications = [
  {
    title: 'Hiding in Plain Floats: Steganographic Carriers for Indirect Prompt and Content Injection',
    year: '2026',
    venue: 'FAGEN@ICML 2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:2osOgNQ5qMEC',
  },
  {
    title: 'VisAnalog: A Diagnostic Suite for Visual Concept Transfer on Natural Images',
    year: '2026',
    venue: 'VisCon@CVPR 2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:UeHWp8X0CEIC',
  },
  {
    title: 'Implicit Reasoning Steering via Concept Chaining',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:IjCSPb-OGe4C',
  },
  {
    title: 'How Well Do LLMs Reason with Noisy Evidence? An Active Visual Reasoning Benchmark',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:_FxGoFyzp5QC',
  },
  {
    title: 'Music of the Deep: An Acoustic Blueprint of Sperm Whale Codas',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:LkGwnXOMwfcC',
  },
  {
    title: 'Structure Across Voices: Comparing Acoustic-Event Type Accumulation and Sequence Dependence Across Four Vocal Corpora Using Frozen Audio Encoders',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:roLk4NBRz8UC',
  },
  {
    title: 'Rhythm of the Deep: A Computational-Linguistic Test of Duality of Patterning in Sperm Whale Codas',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:qjMakFHDy7sC',
  },
  {
    title: 'WebDirect: A Web-based Project Repository',
    year: '2023',
    venue: 'ICICCS 2023',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:9yKSN-GCB0IC',
  },
  {
    title: 'A Web-based Project Repository using ReactJS',
    year: '2022',
    venue: 'ICCCNT 2022',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oiOf9EsAAAAJ&citation_for_view=oiOf9EsAAAAJ:d1gkVwhDpl0C',
  },
];

export const experiences = [
  {
    title: 'Research Engineer – Evals Lead',
    subheading: 'AGI Inc · May 2026 – Present',
    bullets: [
      'Building a scalable benchmarking and evaluation automation system for agentic LLMs, defining metrics and testing protocols for continuous automated evaluation, regression detection, and reproducible model comparisons.',
      'Engineering state-control and orchestration infrastructure for live mobile-app benchmarks, automating device/application reset and pre-run validation to enable reproducible evaluation despite dynamic external state.',
      'Designed QA rubrics and golden-trajectory review processes for long-horizon tasks, separating model failures from judge, task, environment, and harness issues, and turning failure analysis into SFT/RL post-training iterations for targeted model improvement.',
    ],
    tags: [],
  },
  {
    title: 'AI Research — Google Gemini Project Team at Turing',
    subheading: 'Turing · September 2025 – May 2026',
    bullets: [
      'Designed a multimodal evaluation framework for technically grounded image-generation tasks.',
      'Benchmarked frontier multimodal LLMs, including Gemini variants, for stability, variance, and consistency across repeated runs.',
      'Built automated evaluation pipelines that cut analysis turnaround by 60% and produced research reports translating visual performance gaps into model-improvement signals.',
    ],
    tags: [],
  },
  {
    title: 'Research Assistant',
    subheading: 'Arizona State University · January 2025 – Present',
    bullets: [
      'Implemented distributed training of large language models (Qwen 2.5 Math 7B) with CUDA, PyTorch, FlashAttention, and vLLM on A100 GPUs, achieving a 2.8x training throughput increase through system optimization.',
      'Replicated and enhanced the Tiny Zero reasoning framework using iterative SFT in place of GRPO, improving model performance by 15% through self-learning.',
      'Designed a comprehensive evaluation framework with automated metrics tracking and effective resource allocation, reducing assessment time by 70% while increasing result reliability.',
    ],
    tags: ['CUDA', 'PyTorch', 'FlashAttention', 'vLLM'],
  },
];

export const projects = [
  {
    title: 'Data Memorization Benchmark for LLMs',
    date: 'March 2026',
    bullets: [
      'Designed and operationalized a 6-layer perturbation-based evaluation benchmark to systematically quantify memorization depth in open-weight LLMs, introducing a controlled perturbation hierarchy (paraphrastic, entity-swapped, structural abstraction, domain shift) to stress-test detection methods beyond surface-level recall.',
      'Trained and analyzed OLMo-2 7B models via SFT and GRPO across isolated data strata, uncovering cross-layer generalization artifacts and latent memorization leakage signals.',
      'Benchmarked state-of-the-art memorization detection methods against multi-layer synthetic controls, revealing significant blind spots beyond shallow lexical overlap, and produced research-grade evaluation reports.',
    ],
    tags: ['OLMo-2 7B', 'SFT', 'GRPO'],
  },
  {
    title: 'Multimodal Reasoning Framework — ARC-AGI-2',
    date: 'April 2025 · Strong Compute Hackathon Winner, $2,500 compute prize',
    bullets: [
      'Engineered a synthetic data generation pipeline for the ARC-AGI-2 challenge benchmark, demonstrating superior general pattern recognition capabilities in a vision-LLM model.',
      'Structured model responses using three custom token blocks (visual explanation, logical planning, transformation code), improving interpretability and enabling systematic reasoning on abstract visual patterns.',
      'Achieved a 75+% resolution rate by training a reward model with SFT and GRPO alongside LIMO-based reasoning, significantly enhancing generalization across unseen pattern-recognition tasks.',
    ],
    tags: ['Vision-LLM', 'SFT', 'GRPO', 'LIMO'],
  },
];
