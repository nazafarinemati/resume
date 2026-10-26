import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const newOuter = path.join(root, "applications", "AMD", "10-26-2026");
const ids = [
  "92626", "93491", "92051", "91873", "89589", "80979", "92716", "87563",
  "87873", "92045", "87853", "91572", "86744", "87746", "92549", "87744",
  "92704", "93682", "91613", "87703", "87704", "87745",
];
const existingArchiveDate = new Set(["91873", "87853", "87746", "91613", "87703", "87704", "87745"]);

const B = {
  kernel: ["Compiler & GPU Inference Optimization", "Profiled transformer inference on NVIDIA Jetson Orin and optimized selected operators using CUDA and the MLIR-based Triton toolchain, focusing on memory access and kernel-launch overhead."],
  kernels: ["GPU Kernel Development", "Developed CUDA and Triton kernels for transformer operators and used MLIR-based compiler workflows to optimize fusion, tensor layouts, memory access, and launch overhead for GPU inference."],
  profile: ["GPU Performance Analysis", "Profiled and optimized Qwen3.5 models up to 35B with TensorRT-LLM and vLLM, using NVIDIA Nsight Systems/Compute to identify memory- and compute-bound bottlenecks across long-context inference workloads."],
  benchmark: ["Performance Benchmarking", "Built a vLLM benchmark suite for Qwen3.5 2B measuring time to first token, inter-token latency, token throughput, P95 latency, GPU memory, and maximum concurrency across batch sizes, context lengths, and prefix-cache hit rates."],
  serve: ["Inference Runtime Tuning", "Deployed and evaluated Qwen3.5 2B with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency."],
  distributed: ["Distributed Training & Evaluation", "Engineered PyTorch pipelines with DDP to train and evaluate multimodal foundation models, developing task-specific metrics and regression checks for performance validation."],
  posttrain: ["LLM Post-Training", "Built distributed PyTorch/DDP pipelines to post-train multimodal foundation models with SFT, DPO, and GRPO, supporting scalable reinforcement-learning workloads for planning, reasoning, grounding, verification, and error recovery."],
  agents: ["Production Multi-Agent Systems", "Built a production-grade LangGraph-based multimodal multi-agent system for long-horizon Android app and browser workflows, orchestrating task decomposition, visual grounding, tool execution, verification, dynamic replanning, and error recovery on real devices."],
  evaluate: ["Agent Evaluation", "Engineered evaluation and observability infrastructure that logged screenshots, model outputs, tool actions, latency, execution plans, and step traces to isolate failure modes and measure end-to-end task success on real Android devices."],
  rag: ["Retrieval-Augmented Agents", "Integrated retrieval-augmented generation into LangGraph agents to retrieve relevant task context and execution histories for grounded planning, verification, troubleshooting, and error recovery."],
  world: ["World Model Training", "Continually pre-trained Qwen3.5 4B as a world model for GUI agents on approximately 500,000 public and in-house trajectories averaging 22 interaction turns."],
  simulate: ["Agent Simulation", "Integrated and evaluated Qwen-AgentWorld and ViMo for Android GUI agents, combining language-based environment simulation with visual next-state prediction to generate trajectories for long-horizon planning."],
  compress: ["Model Optimization", "Fine-tuned and optimized Qwen3.5 for autonomous-driving scene understanding and ego-trajectory prediction, reducing parameters from 3.75B to 1.4B through structured depth pruning for edge compute and memory constraints."],
  flash: ["Attention Kernel Optimization", "Prototyped CUDA kernels for FlashAttention-style transformer attention, analyzing memory-access patterns, tiling strategies, and GPU parallelism for low-latency inference."],
  perception: ["Autonomous-System Perception", "Fine-tuned and optimized Qwen3.5 for multimodal scene understanding and ego-trajectory prediction in autonomous driving, reducing parameters from 3.75B to 1.4B through structured depth pruning for edge compute and memory constraints."],
  robotics: ["Robotics Model Fine-Tuning", "Collaborated on fine-tuning Physical Intelligence's $\\pi$0.5 vision-language-action model for robotic-arm control in automotive hardware testing."],
};

const variants = {
  "92626": {
    summary: "AI Engineer and Computer Science PhD specializing in Triton kernels, ML compiler workflows, GPU performance, and distributed deep learning. Experienced developing CUDA and Triton operators, analyzing memory and compute bottlenecks, and optimizing foundation-model training and inference.",
    bullets: [B.kernels, B.kernel, B.flash, B.profile, B.distributed, B.benchmark],
    skills: ["Programming & Compilers: C++, Python, CUDA, Triton, MLIR", "Machine Learning: PyTorch, Transformers, Deep Learning, Model Evaluation", "GPU Performance: Kernel Optimization, NVIDIA Nsight, Memory Analysis, Benchmarking", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Git"],
  },
  "93491": {
    summary: "AI Engineer and Computer Science PhD specializing in GPU kernel development, architecture-aware optimization, ML compilers, and AI inference. Experienced developing CUDA and Triton operators, profiling compute and memory bottlenecks, and improving model-serving efficiency.",
    bullets: [B.kernels, B.flash, B.profile, B.kernel, B.benchmark, B.serve],
    skills: ["Programming & Compilers: C++, Python, CUDA, Triton, MLIR", "Machine Learning: PyTorch, TensorFlow, Transformers, Quantization", "GPU Performance: Kernel Optimization, NVIDIA Nsight, Memory Analysis, Benchmarking", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, DDP, Docker, Git"],
  },
  "92051": {
    summary: "AI Engineer and Computer Science PhD specializing in distributed ML infrastructure, model serving, performance evaluation, and production AI systems. Experienced building reliable training and inference pipelines, benchmark automation, observability tooling, and high-concurrency LLM services.",
    bullets: [B.distributed, B.serve, B.benchmark, B.evaluate, B.profile, B.agents],
    skills: ["Programming & Infrastructure: Python, C++, SQL, Docker, Git", "Machine Learning: PyTorch, Transformers, Model Evaluation, Distributed Training", "ML Systems: vLLM, TensorRT-LLM, FSDP, DDP, Model Serving", "Reliability & Evaluation: Observability, Benchmarking, Regression Testing, Failure Analysis"],
  },
  "91873": {
    summary: "AI Engineer and Computer Science PhD specializing in GPU performance analysis, ML compiler workflows, kernel optimization, and AI inference. Experienced developing CUDA and Triton kernels, profiling foundation-model workloads, benchmarking GPU systems, and tuning distributed model performance.",
    bullets: [B.kernels, B.profile, B.benchmark, B.distributed, B.serve, B.compress],
    skills: ["Programming & Compilers: C++, Python, CUDA, Triton, MLIR", "Machine Learning: PyTorch, TensorFlow, Transformers, Deep Learning, Model Evaluation", "GPU Performance: NVIDIA Nsight, Kernel Optimization, Workload Analysis, Benchmarking", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Docker, Git"],
  },
  "89589": {
    summary: "AI Engineer and Computer Science PhD specializing in ML compiler workflows, GPU kernel optimization, AI workload performance, and distributed deep learning. Experienced developing CUDA and Triton operators, profiling foundation-model workloads, and benchmarking training and inference systems.",
    bullets: [B.kernels, B.kernel, B.profile, B.benchmark, B.posttrain, B.distributed],
    skills: ["Programming & Compilers: C++, Python, CUDA, Triton, MLIR", "Machine Learning: PyTorch, Transformers, Reinforcement Learning, Model Evaluation", "GPU Performance: NVIDIA Nsight, Kernel Optimization, Workload Analysis, Benchmarking", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Git"],
  },
  "80979": {
    summary: "AI Engineer and Computer Science PhD specializing in GenAI inference optimization, GPU performance, model serving, and distributed ML systems. Experienced tuning latency, throughput, memory use, caching, quantization, and concurrency across large language and multimodal models.",
    bullets: [B.profile, B.benchmark, B.serve, B.kernels, B.compress, B.distributed],
    skills: ["Programming: C++, Python, CUDA, Triton", "Machine Learning: PyTorch, Transformers, Multimodal Learning, Model Evaluation", "Inference Optimization: Quantization, KV/Prefix Caching, Structured Pruning, Benchmarking", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Docker"],
  },
  "92716": {
    summary: "AI Engineer and Computer Science PhD specializing in end-to-end AI solutions, distributed training, model serving, and performance optimization. Experienced developing and evaluating LLM, multimodal, RAG, and computer-vision workflows across training, fine-tuning, and inference.",
    bullets: [B.distributed, B.posttrain, B.serve, B.benchmark, B.rag, B.profile],
    skills: ["Programming & Infrastructure: Python, C++, SQL, Docker, Git", "Machine Learning: PyTorch, TensorFlow, Transformers, Computer Vision, Model Evaluation", "AI Solutions: Large Language Models, RAG, Fine-Tuning, Distributed Training", "ML Systems: vLLM, TensorRT-LLM, Triton, CUDA, Benchmarking"],
  },
  "87563": {
    summary: "AI Engineer and Computer Science PhD specializing in system performance analysis, workload characterization, GPU optimization, and machine learning acceleration. Experienced building microbenchmarks, identifying compute and memory bottlenecks, and developing performance-analysis tools for AI workloads.",
    bullets: [B.profile, B.benchmark, B.kernels, B.kernel, B.distributed, B.compress],
    skills: ["Programming: C++, Python, CUDA, Triton", "Machine Learning: PyTorch, TensorFlow, Transformers, Model Evaluation", "Performance Analysis: NVIDIA Nsight, Workload Characterization, Microbenchmarking, Profiling", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, DDP, Docker, Git"],
  },
  "87873": {
    summary: "AI Engineer and Computer Science PhD specializing in agentic optimization, reinforcement learning, GPU performance, and reproducible evaluation. Experienced building tool-using agents, automated validation loops, benchmark harnesses, and post-training pipelines that learn from execution feedback.",
    bullets: [B.agents, B.evaluate, B.posttrain, B.kernels, B.benchmark, B.profile],
    skills: ["Programming: Python, C++, CUDA, Triton", "Reinforcement Learning: SFT, DPO, GRPO, Preference Optimization", "Agentic AI: LangGraph, Tool Use, Dynamic Planning, Error Recovery", "Performance Systems: PyTorch, NVIDIA Nsight, Benchmarking, Profiling, Distributed Training"],
  },
  "92045": {
    summary: "AI Engineer and Computer Science PhD specializing in AI performance engineering, GPU acceleration, distributed training, and production inference. Experienced profiling system bottlenecks, optimizing kernels and model runtimes, and building reproducible benchmarks for foundation-model workloads.",
    bullets: [B.profile, B.kernels, B.benchmark, B.distributed, B.serve, B.kernel],
    skills: ["Programming: C++, Python, CUDA, Triton", "Machine Learning: PyTorch, TensorFlow, Transformers, Model Evaluation", "Performance Analysis: NVIDIA Nsight, Kernel Optimization, Workload Characterization, Benchmarking", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Docker"],
  },
  "91613": {
    summary: "AI Engineer and Computer Science PhD specializing in reinforcement learning, LLM post-training, agentic AI, and model evaluation. Experienced training foundation models with SFT, DPO, and GRPO, building distributed PyTorch pipelines, and evaluating long-horizon agent behavior.",
    bullets: [B.posttrain, B.world, B.evaluate, B.simulate, B.agents],
    gnn: true,
    skills: ["Programming: Python, C++, SQL", "Reinforcement Learning: SFT, DPO, GRPO, Preference Optimization, Distributed Training", "Machine Learning: PyTorch, Transformers, Large Language Models, Model Evaluation", "Agentic AI: LangGraph, Multi-Agent Systems, Tool Use, Dynamic Planning, Agent Evaluation"],
  },
  "91612": {
    summary: "AI Engineer and Computer Science PhD specializing in production multi-agent systems, retrieval-augmented generation, and LLM evaluation. Experienced building LangGraph orchestration, grounded tool-use workflows, observability infrastructure, and scalable model training and serving pipelines.",
    bullets: [B.agents, B.rag, B.evaluate, B.posttrain, B.serve, B.world],
    skills: ["Programming & Infrastructure: Python, C++, SQL, Docker, Git", "Machine Learning: PyTorch, Transformers, Large Language Models, Model Evaluation", "Agentic AI: LangGraph, Multi-Agent Systems, RAG, Tool Use, Dynamic Planning", "ML Systems: vLLM, Distributed Training, DDP, Observability, Benchmarking"],
  },
  "87745": {
    summary: "AI Engineer and Computer Science PhD specializing in production AI systems, LLM post-training, agentic workflows, and GPU-accelerated inference. Experienced building and evaluating multi-agent applications, training foundation models, and deploying measurable ML systems from prototype through production.",
    bullets: [B.agents, B.posttrain, B.evaluate, B.rag, B.serve, B.benchmark],
    skills: ["Programming: Python, C++, CUDA, SQL", "Machine Learning: PyTorch, Transformers, Reinforcement Learning, Model Evaluation", "Agentic AI: LangGraph, Multi-Agent Systems, RAG, Tool Use, Agent Evaluation", "ML Systems: vLLM, Distributed Training, DDP, Benchmarking, Docker, Git"],
  },
  "87746": {
    summary: "AI Engineer and Computer Science PhD specializing in distributed ML systems, agentic AI platforms, GPU inference, and reproducible evaluation. Experienced building training and serving pipelines, benchmark automation, observability tooling, and performance workflows for foundation models.",
    bullets: [B.distributed, B.evaluate, B.benchmark, B.profile, B.serve],
    skills: ["Programming & Infrastructure: Python, C++, CUDA, Docker, Git", "Machine Learning: PyTorch, Transformers, Model Evaluation, Distributed Training", "ML Platforms: vLLM, TensorRT-LLM, DDP, FSDP, Benchmark Automation", "Agentic AI: LangGraph, Multi-Agent Systems, Tool Use, Agent Evaluation"],
  },
  "87853": {
    summary: "AI Engineer and Computer Science PhD specializing in GPU inference performance, workload profiling, ML runtimes, and distributed deep learning. Experienced diagnosing NVIDIA GPU bottlenecks with Nsight, benchmarking LLM serving, developing CUDA kernels, and tuning latency, throughput, and concurrency.",
    bullets: [B.profile, B.benchmark, B.kernel, B.serve, B.distributed, B.kernels],
    skills: ["Programming: C++, Python, CUDA, Triton", "GPU Performance: NVIDIA Nsight Systems/Compute, Profiling, Kernel Optimization", "ML Runtimes: TensorRT-LLM, vLLM, PyTorch, MLIR, Transformers", "ML Systems: Benchmarking, Distributed Training, FSDP, DDP, Docker, Git"],
  },
  "91572": {
    summary: "AI Engineer and Computer Science PhD specializing in GPU runtime performance, kernel optimization, distributed deep learning, and model serving. Experienced developing CUDA and Triton operators, profiling full-stack inference bottlenecks, and tuning scalable training and serving workloads.",
    bullets: [B.kernels, B.profile, B.kernel, B.distributed, B.serve, B.benchmark],
    skills: ["Programming & Compilers: C++, Python, CUDA, Triton, MLIR", "Machine Learning: PyTorch, TensorFlow, Transformers, Deep Learning", "GPU Systems: NVIDIA Nsight, Kernel Optimization, Runtime Profiling, Benchmarking", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Docker"],
  },
  "86744": {
    summary: "AI Engineer and Computer Science PhD specializing in Triton and CUDA kernels, transformer inference, ML compiler workflows, and GPU performance. Experienced optimizing attention-style operators, profiling memory and compute bottlenecks, and productionizing high-throughput model serving.",
    bullets: [B.kernels, B.flash, B.kernel, B.profile, B.benchmark, B.serve],
    skills: ["Programming & Compilers: C++, Python, CUDA, Triton, MLIR", "Machine Learning: PyTorch, Transformers, Large Language Models, Model Evaluation", "GPU Performance: Attention Kernels, NVIDIA Nsight, Kernel Optimization, Benchmarking", "ML Systems: vLLM, TensorRT-LLM, Distributed Training, DDP, Docker, Git"],
  },
  "92549": {
    summary: "AI Engineer and Computer Science PhD specializing in autonomous-system AI, multimodal perception, edge inference, and model optimization. Experienced training and compressing vision-language models, profiling GPU workloads, and deploying low-latency inference under compute and memory constraints.",
    bullets: [B.perception, B.distributed, B.robotics, B.profile, B.kernel, B.serve],
    skills: ["Programming: Python, C++, CUDA, Triton", "Machine Learning: PyTorch, TensorFlow, Transformers, Vision-Language Models", "Autonomous Systems: Scene Understanding, Ego-Trajectory Prediction, Object Detection, Segmentation", "Model Optimization: NVIDIA Nsight, Structured Pruning, Quantization, vLLM, TensorRT-LLM"],
  },
  "87744": {
    summary: "AI Engineer and Computer Science PhD specializing in applied AI research, agentic systems, retrieval, and measurable model evaluation. Experienced translating complex engineering workflows into production prototypes, benchmarks, post-training pipelines, and reusable AI capabilities.",
    bullets: [B.agents, B.rag, B.evaluate, B.posttrain, B.benchmark, B.serve],
    skills: ["Programming: Python, C++, SQL", "Machine Learning: PyTorch, Transformers, Reinforcement Learning, Model Evaluation", "Agentic AI: LangGraph, Multi-Agent Systems, RAG, Tool Use, Dynamic Planning", "ML Systems: vLLM, Distributed Training, DDP, Benchmarking, Observability"],
  },
  "92704": {
    summary: "AI Engineer and Computer Science PhD specializing in ML systems, reinforcement-learning post-training, agent inference, and reproducible evaluation. Experienced building distributed training, serving, tool-use, benchmark, and observability pipelines for long-horizon multimodal agents.",
    bullets: [B.posttrain, B.agents, B.evaluate, B.benchmark, B.serve, B.world],
    skills: ["Programming: Python, C++, SQL", "Reinforcement Learning: SFT, DPO, GRPO, Preference Optimization", "Agentic AI: LangGraph, Tool Use, Dynamic Planning, Agent Evaluation", "ML Systems: PyTorch, vLLM, Distributed Training, DDP, Benchmarking, Observability"],
  },
  "93682": {
    summary: "AI Engineer and Computer Science PhD specializing in foundation-model training, intelligent agents, reinforcement learning, and rigorous evaluation. Experienced continued pre-training, post-training, tool-use system design, trajectory-based learning, and distributed experimentation.",
    bullets: [B.world, B.posttrain, B.agents, B.evaluate, B.simulate, B.rag],
    skills: ["Programming: Python, C++, SQL", "Machine Learning: PyTorch, Transformers, Large Language Models, Model Evaluation", "Reinforcement Learning: SFT, DPO, GRPO, Distributed Training", "Agentic AI: LangGraph, World Models, Tool Use, Dynamic Planning, Agent Evaluation"],
  },
  "87703": {
    summary: "AI Engineer and Computer Science PhD specializing in intelligent agents, long-horizon learning, multimodal models, and ML evaluation. Experienced training agent world models, building tool-use systems, developing reproducible benchmarks, and improving generalization across complex workflows.",
    bullets: [B.world, B.simulate, B.agents, B.posttrain, B.evaluate],
    skills: ["Programming: Python, C++, SQL", "Machine Learning: PyTorch, Transformers, Multimodal Learning, Model Evaluation", "Reinforcement Learning: SFT, DPO, GRPO, Distributed Training", "Agentic AI: LangGraph, World Models, Tool Use, Dynamic Planning, Agent Evaluation"],
  },
  "87704": {
    summary: "AI Engineer and Computer Science PhD specializing in reinforcement learning, iterative model improvement, agent evaluation, and multimodal AI. Experienced post-training foundation models, building controlled evaluation harnesses, analyzing failure modes, and improving long-horizon agent reliability.",
    bullets: [B.posttrain, B.evaluate, B.world, B.simulate, B.agents],
    gnn: true,
    skills: ["Programming: Python, C++, SQL", "Reinforcement Learning: SFT, DPO, GRPO, Preference Optimization", "Machine Learning: PyTorch, Transformers, Model Evaluation, Knowledge Distillation", "Agentic AI: LangGraph, World Models, Tool Use, Agent Evaluation, Error Recovery"],
  },
  "87218": {
    summary: "AI Engineer and Computer Science PhD specializing in GPU kernel optimization, LLM post-training, distributed deep learning, and inference performance. Experienced developing CUDA and Triton kernels, training models with SFT, DPO, and GRPO, and profiling large-scale serving workloads.",
    bullets: [B.kernels, B.posttrain, B.profile, B.distributed, B.benchmark, B.serve],
    skills: ["Programming & Compilers: C++, Python, CUDA, Triton, MLIR", "Machine Learning: PyTorch, Transformers, Reinforcement Learning, Model Evaluation", "GPU Performance: NVIDIA Nsight, Kernel Optimization, Benchmarking, Quantization", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Docker"],
  },
  "87598": {
    summary: "AI Engineer and Computer Science PhD specializing in GPU kernel development, ML compiler workflows, deep learning frameworks, and distributed inference. Experienced optimizing CUDA and Triton operators, profiling foundation-model workloads, and tuning training and serving performance.",
    bullets: [B.kernels, B.kernel, B.profile, B.distributed, B.benchmark, B.serve],
    skills: ["Programming & Compilers: C++, Python, CUDA, Triton, MLIR", "Machine Learning: PyTorch, TensorFlow, Transformers, Deep Learning, Model Evaluation", "GPU Performance: NVIDIA Nsight, Kernel Optimization, Benchmarking, Quantization", "ML Systems: TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Docker, Git"],
  },
};

const latexEscape = (s) => s.replaceAll("&", "\\&").replaceAll("%", "\\%");
const item = ([label, body]) => `    \\resumeItem{\\textbf{${latexEscape(label)}:} ${latexEscape(body)}}`;
const preamble = String.raw`\RequirePackage{fix-cm}
\documentclass[letterpaper,13pt]{article}
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage[absolute,overlay]{textpos}
\usepackage{xcolor}
\input{glyphtounicode}
\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.55in}
\addtolength{\textheight}{1.15in}
\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}
\titleformat{\section}{\vspace{0pt}\scshape\raggedright\large}{}{0em}{}[\color{black}\titlerule \vspace{-2pt}]
\pdfgentounicode=1
\newcommand{\resumeItem}[1]{\item\small{{#1}}}
\newcommand{\resumeSubheading}[4]{\vspace{-2pt}\item\begin{tabular*}{\textwidth}[t]{l@{\extracolsep{\fill}}r}\textbf{#1} & #2 \enspace $|$ \enspace \textit{\small #4} \\ {\fontsize{10pt}{11pt}\selectfont\textit{#3}} & \\ \end{tabular*}\vspace{-1pt}}
\newcommand{\resumeProjectHeading}[2]{\item\begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}\small#1 & #2 \\ \end{tabular*}\vspace{-4pt}}
\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}
\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=0.22in, itemsep=2pt, parsep=0pt, topsep=1pt, partopsep=0pt]}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-2pt}}
\begin{document}
\begin{center}
    \textbf{\LARGE \scshape Mohammadreza Nemati} \\ \vspace{1pt}
    \small Santa Clara, CA 95054 $|$ Mobile: 567-204-7520 $|$
    \href{mailto:mrnemati747@gmail.com}{mrnemati747@gmail.com} $|$
    \href{https://www.linkedin.com/in/mnemati/}{\textcolor{blue}{\underline{www.linkedin.com/in/mnemati}}}
\end{center}`;

function resume(v) {
  return `${preamble}

\\section{Summary}
\\small{${latexEscape(v.summary)}}
\\vspace{0.05cm}

\\section{Experience}
\\vspace{0.05cm}
\\resumeSubHeadingListStart
\\resumeSubheading{AI Engineer}{2025 - Present}{Volkswagen}{Belmont, CA}
  \\resumeItemListStart
${v.bullets.map(item).join("\n")}
  \\resumeItemListEnd
  \\vspace{0.04cm}
\\resumeSubheading{AI Researcher}{2022 - 2025}{Case Western Reserve University}{Cleveland, Ohio}
  \\resumeItemListStart
    \\resumeItem{\\textbf{LLM Inference Optimization:} Developed an adaptive mixed-precision KV-cache quantization method based on key/value norm imbalance, achieving 2$\\times$ memory reduction with $>$94\\% accuracy retention across LLMs up to 70B parameters.}
    \\resumeItem{\\textbf{Model Development:} Developed LIT-LVM, a latent-variable method for structured interaction modeling that outperformed elastic net, hierarchical lasso, and factorization-machine baselines across simulated and real-world datasets.}
    \\resumeItem{\\textbf{Multimodal Learning:} Developed DEASurv, a multimodal time-to-event survival prediction model combining entity-specific embeddings, attention, and contrastive learning for large-scale medical datasets.}
  \\resumeItemListEnd
  \\vspace{0.02cm}
\\resumeSubheading{Software Engineer - AI/ML Intern}{2024}{Sherwin-Williams}{Cleveland, Ohio}
  \\resumeItemListStart
    \\resumeItem{\\textbf{Vision Model Deployment:} Built and deployed a VLM-based perception system integrating LLaVA, vision transformers, and SAM for natural-language object detection, grounding, and semantic segmentation, improving segmentation quality by 7\\% IoU.}
  \\resumeItemListEnd
  \\vspace{0.02cm}
\\resumeSubheading{Data Science Research Intern}{2023}{Beyond AI}{Glendale, California}
  \\resumeItemListStart
    \\resumeItem{\\textbf{Multi-GPU Training:} Fine-tuned Llama-2 on refinery-domain text using PyTorch FSDP/DDP for scalable distributed training and quantized deployment.}
${v.gnn ? "    \\\\resumeItem{\\\\textbf{Graph Neural Networks:} Trained GCN, GAT, and GraphSAGE models using PyTorch Geometric for water-pressure prediction in water-grid systems.}" : ""}
  \\resumeItemListEnd
  \\vspace{0.02cm}
\\resumeSubheading{Software Intern}{2020}{Nexteer Automotive}{Auburn Hills, Michigan}
  \\resumeItemListStart
    \\resumeItem{\\textbf{Validation Data Pipeline:} Developed a data pipeline for electric power-steering test data, enabling structured analysis and validation of steering-system responses for ADAS applications.}
  \\resumeItemListEnd
\\resumeSubHeadingListEnd

\\section{Skills}
\\vspace{0.02cm}
\\begin{itemize}[leftmargin=0.15in, label={}, itemsep=2pt, topsep=1pt]
${v.skills.map(s => `  \\item \\textbf{${latexEscape(s.split(": ")[0])}}: ${latexEscape(s.split(": ").slice(1).join(": "))}`).join("\n")}
\\end{itemize}
\\vspace{0.02cm}

\\section{Education}
\\resumeSubHeadingListStart
  \\resumeProjectHeading{\\textbf{Case Western Reserve University} -- PhD, Computer Science}{Cleveland, OH $|$ 2025}
\\resumeSubHeadingListEnd
\\end{document}
`;
}

const salaries = {
  "92626": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "93491": "$170,100-$243,000 and $194,400-$291,600 USD/year (ranges shown in official posting)",
  "92051": "$150,500-$215,000 and $172,000-$258,000 USD/year (ranges shown in official posting)",
  "91873": "$124,040-$177,200 and $141,760-$212,640 USD/year (ranges shown in official posting)",
  "89589": "$210,000-$300,000 and $240,000-$360,000 USD/year (ranges shown in official posting)",
  "80979": "$210,000-$300,000 and $240,000-$360,000 USD/year (ranges shown in official posting)",
  "92716": "$175,700-$251,000 and $200,800-$301,200 USD/year (ranges shown in official posting)",
  "87563": "$164,640-$235,200 and $188,160-$282,240 USD/year (ranges shown in official posting)",
  "87873": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "92045": "$151,900-$217,000 and $173,600-$260,400 USD/year (ranges shown in official posting)",
  "91613": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "87745": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "87746": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "87853": "$143,500-$205,000 and $164,000-$246,000 USD/year (ranges shown in official posting)",
  "91572": "$224,000-$320,000 and $256,000-$384,000 USD/year (ranges shown in official posting)",
  "86744": "$127,400-$182,000 and $145,600-$218,400 USD/year (ranges shown in official posting)",
  "92549": "$175,700-$251,000 and $200,800-$301,200 USD/year (ranges shown in official posting)",
  "87744": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "92704": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "93682": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "87703": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
  "87704": "$178,500-$255,000 and $204,000-$306,000 USD/year (ranges shown in official posting)",
};

function mdBody(text) {
  return text.split("\n").map(line => {
    const t = line.trim();
    if (/^(THE ROLE|THE PERSON|THE ROLE AND THE TEAM|ABOUT THE ROLE|KEY RESPONSIBILITIES|REQUIRED QUALIFICATIONS|PREFERRED QUALIFICATIONS|PREFERRED EXPERIENCE|MINIMUM EXPERIENCE|ACADEMIC CREDENTIALS|PREFERRED ACADEMIC CREDENTIALS|TECHNICAL FOCUS AREAS|EDUCATION|LOCATION|WHAT YOU'LL DO|WHAT WE'RE LOOKING FOR|WHAT MAKES THIS ROLE UNIQUE|SYSTEMS & GPU PERFORMANCE \(KERNEL ENGINEERING\)|AI POST-TRAINING & LLM SYSTEMS|PREFERRED BACKGROUND):?$/i.test(t)) return `## ${t}`;
    return line;
  }).join("\n");
}

fs.mkdirSync(newOuter, {recursive: true});
for (const id of ids) {
  const job = JSON.parse(fs.readFileSync(`/private/tmp/amd-${id}.json`, "utf8"));
  const posting = job.datePosted.slice(5, 10).split("-").map(Number).join("-");
  const outer = existingArchiveDate.has(id)
    ? path.join(root, "applications", "AMD", "9-21-2026")
    : newOuter;
  const dir = path.join(outer, `AMD_${id}_${posting}`);
  fs.mkdirSync(dir, {recursive: true});
  const sourceUrl = `https://careers.amd.com/careers-home/jobs/${id}?lang=en-us`;
  const title = job.title.replace(/\s+/g, " ").trim();
  const locationObjects = Array.isArray(job.locations) ? job.locations : [job.locations];
  const location = locationObjects.map(x => [x.address.addressLocality, x.address.addressRegion, x.address.addressCountry].filter(Boolean).join(", ")).join("; ");
  const date = new Date(job.datePosted).toLocaleDateString("en-US", {month:"long", day:"numeric", year:"numeric", timeZone:"UTC"});
  const validThrough = new Date(job.validThrough).toLocaleDateString("en-US", {month:"long", day:"numeric", year:"numeric", timeZone:"UTC"});
  const workArrangement = id === "91873" ? "Hybrid (explicitly labeled in posting)" : "Not stated in posting";
  const metadata = `Company: Advanced Micro Devices, Inc. (AMD)\nPosition: ${title}\nJob ID: ${id}\nLocation: ${location}\nWork arrangement: ${workArrangement}\nDepartment: Not stated in posting\nEmployment type: Full-time\nPosting date: ${date}\nValid through: ${validThrough}\nRetrieved: October 26, 2026\nCompensation: ${salaries[id]}\nSource URL: ${sourceUrl}\n`;
  fs.writeFileSync(path.join(dir, "Nemati_Resume.tex"), resume(variants[id]));
  fs.writeFileSync(path.join(dir, "job_description.txt"), `${metadata}\nFULL JOB DESCRIPTION\n\n${job.description}\n`);
  const md = `# AMD\n\n## ${title}\n\n| Field | Details |\n|---|---|\n| Job ID | ${id} |\n| Location | ${location} |\n| Work arrangement | ${workArrangement} |\n| Department | Not stated in posting |\n| Employment type | Full-time |\n| Posting date | ${date} |\n| Valid through | ${validThrough} |\n| Retrieved | October 26, 2026 |\n| Compensation | ${salaries[id].replaceAll("$", "\\$")} |\n| Source | [Official AMD posting](${sourceUrl}) |\n\n${mdBody(job.description)}\n`;
  fs.writeFileSync(path.join(dir, "job_description.md"), md);
}
console.log(`Created or refreshed ${ids.length} AMD application directories.`);
