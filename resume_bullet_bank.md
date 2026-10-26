# Resume Bullet Bank

Use this file as the source of reusable, verified resume bullets. When tailoring
`Nemati_Resume.tex`, review this bank before adding or removing bullets. When a
bullet is removed from the resume, keep it here with enough context to bring it
back for a future role.

## Summary Variants

### Inference / Agentic AI

- AI Engineer and Computer Science PhD specializing in scalable machine learning, LLM inference, agentic AI, and GPU-accelerated systems. Experienced optimizing TensorRT-LLM and vLLM workloads, developing custom inference kernels, post-training foundation models, and building distributed PyTorch pipelines.

### Production Agentic AI

- AI Engineer and Computer Science PhD specializing in scalable machine learning, agentic AI, multimodal modeling, and production AI systems. Experienced building production-grade multi-agent systems, post-training foundation models, evaluating agent behavior, and deploying vLLM workloads.

### AI Model Lifecycle / Solutions Architecture

- AI Engineer and Computer Science PhD specializing in scalable machine learning, multimodal foundation models, reinforcement learning, and GPU-accelerated inference. Experienced post-training and evaluating models, optimizing TensorRT-LLM and vLLM workloads, and building distributed PyTorch pipelines.

### Healthcare AI Research

- AI Engineer and Computer Science PhD with research experience in AI for healthcare, specializing in multimodal modeling, deep learning, and scalable machine learning. Experienced developing predictive models for large-scale medical datasets, post-training foundation models, and building distributed PyTorch research pipelines.

## Active Bullets

### Volkswagen - AI Engineer

- Integrated retrieval-augmented generation into LangGraph agents to retrieve relevant task context and execution histories for grounded planning, verification, troubleshooting, and error recovery.
- Developed CUDA and Triton kernels for transformer operators and used MLIR-based compiler workflows to optimize fusion, tensor layouts, memory access, and launch overhead for GPU inference.
- Built a vLLM benchmark suite for Qwen3.5 2B that measured time to first token, inter-token latency, tokens per second, P95 latency, GPU memory, and maximum concurrency across batch sizes, context lengths, and prefix-cache hit rates.
- Profiled and optimized Qwen3.5 models up to 35B with TensorRT-LLM and vLLM, using NVIDIA Nsight Systems/Compute to identify memory- and compute-bound bottlenecks across long-context inference workloads.
- Continually pre-trained Qwen3.5 4B for use as a world model for GUI agents on approximately 500,000 trajectories assembled from public GUI-agent benchmarks and custom in-house data, with an average trajectory length of 22 interaction turns.
- Fine-tuned and optimized Qwen3.5 for multimodal scene understanding and ego-trajectory prediction in autonomous driving, reducing parameters from 3.75B to 1.4B through structured depth pruning for deployment under edge compute and memory constraints.
- Engineered scalable PyTorch pipelines with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, developing task-specific metrics and regression checks to measure and improve performance.
- Built distributed PyTorch pipelines with DDP for SFT, DPO, and GRPO post-training of multimodal foundation models, supporting scalable fine-tuning, evaluation, and regression analysis.
- Built a production-grade LangGraph-based multimodal multi-agent system for long-horizon Android app and browser workflows, orchestrating task decomposition, visual grounding, tool execution, verification, dynamic replanning, and error recovery on real devices.
- Architected a LangGraph-based multimodal agent system for long-horizon Android app and browser workflows, coordinating task decomposition, visual grounding, tool execution, verification, dynamic replanning, and error recovery on real devices.
- Built distributed PyTorch/DDP pipelines to post-train multimodal foundation models with SFT, DPO, and GRPO, supporting scalable reinforcement-learning workloads for planning, reasoning, grounding, verification, and error recovery.
- Compressed Qwen2.5-VL from 3.75B to 1.4B parameters using structured depth pruning, knowledge distillation from a 7B teacher, and quantization-aware training, reducing compute and memory requirements for efficient multimodal inference.
- Deployed and evaluated a Qwen3.5 2B model with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- Collaborated on fine-tuning Physical Intelligence’s π0.5 vision-language-action model for robotic-arm control in automotive hardware testing.

### Case Western Reserve University - AI Researcher

- Developed an adaptive mixed-precision KV-cache quantization method based on key/value norm imbalance, achieving 2x memory reduction with >94% accuracy retention across LLMs up to 70B parameters.
- Developed DEASurv, a multimodal time-to-event survival prediction model combining entity-specific embeddings, attention, and contrastive learning for large-scale medical datasets.
- Developed LIT-LVM, a latent-variable method for structured interaction modeling that outperformed elastic net, hierarchical lasso, and factorization-machine baselines across simulated and real-world datasets.

### Sherwin-Williams - Software Engineer, AI/ML Intern

- Built and deployed a VLM-based perception system integrating LLaVA, vision transformers, and SAM for natural-language object detection, grounding, and semantic segmentation, improving segmentation quality by 7% IoU.
- Designed and deployed real-time vision-transformer inference pipeline for SAM, tuning latency and improving segmentation quality by 7% IoU through inference evaluation and pipeline optimization.
- Built a VLM-based grounded-perception system integrating LLaVA and vision transformers for natural-language object grounding and segmentation.

### Beyond AI - Data Science Research Intern

- Fine-tuned Llama-2 on refinery-domain text using PyTorch FSDP/DDP for scalable multi-GPU training and quantized deployment.
- Trained GCN, GAT, and GraphSAGE models using PyTorch Geometric for water-pressure prediction in water-grid systems.

## Archived / Role-Specific Bullets

### Applied AI Label Variants

- **Production Multi-Agent Systems:** Built a production-grade LangGraph-based multimodal multi-agent system for long-horizon Android app and browser workflows, orchestrating task decomposition, visual grounding, tool execution, verification, dynamic replanning, and error recovery on real devices.
- **Agentic AI Systems:** Architected a LangGraph-based multimodal agent system for long-horizon Android app and browser workflows, coordinating task decomposition, visual grounding, tool execution, verification, dynamic replanning, and error recovery on real devices.
- **Model Evaluation:** Engineered evaluation and observability infrastructure that logged screenshots, model outputs, tool actions, latency, execution plans, and step traces to isolate failure modes and measure end-to-end task success on real Android devices.
- **Model Deployment:** Deployed and evaluated a Qwen3.5 2B model with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Robotics Model Fine-Tuning:** Collaborated on fine-tuning Physical Intelligence’s π0.5 vision-language-action model for robotic-arm control in automotive hardware testing.
- **Validation Data Pipeline:** Developed a data pipeline for electric power-steering test data, enabling structured analysis and validation of steering-system responses for ADAS applications.

### Model Optimization Label Variants

- **Runtime & Kernel Acceleration:** Developed CUDA and Triton kernels for transformer operators and used MLIR-based compiler workflows to optimize fusion, tensor layouts, memory access, and launch overhead for GPU inference.
- **LLM Serving Benchmarks:** Built a vLLM benchmark suite for Qwen3.5 2B that measured time to first token, inter-token latency, tokens per second, P95 latency, GPU memory, and maximum concurrency across batch sizes, context lengths, and prefix-cache hit rates.
- **Hardware-Aware Profiling:** Profiled and optimized Qwen3.5 models up to 35B with TensorRT-LLM and vLLM, using NVIDIA Nsight Systems/Compute to identify memory- and compute-bound bottlenecks across long-context inference workloads.
- **Production Model Serving:** Deployed and evaluated Qwen3.5 2B with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Model Optimization:** Compressed Qwen2.5-VL from 3.75B to 1.4B parameters using structured depth pruning, knowledge distillation from a 7B teacher, and quantization-aware training, reducing compute and memory requirements for efficient multimodal inference.
- **Inference Optimization:** Optimized Qwen3.5 inference up to 35B across TensorRT-LLM and vLLM, using NVIDIA Nsight Systems/Compute to isolate memory- and compute-bound bottlenecks and improve serving latency and throughput.
- **CUDA Kernel Development:** Prototyped CUDA kernels for FlashAttention-style attention, analyzing memory-access patterns, tiling strategies, and GPU parallelism for low-latency inference.
- **RL Post-Training:** Built distributed PyTorch/DDP pipelines to post-train multimodal foundation models with SFT, DPO, and GRPO, supporting scalable reinforcement-learning workloads for planning, reasoning, grounding, verification, and error recovery.
- **Agentic AI Systems:** Architected a LangGraph-based multimodal agent system for long-horizon Android app and browser workflows, coordinating task decomposition, visual grounding, tool execution, verification, dynamic replanning, and error recovery on real devices.
- **Data Pipeline:** Developed a data pipeline for electric power-steering test data, enabling structured analysis and validation of steering-system responses for ADAS applications.

### World Model / Simulation Label Variants

- **Continual Pre-Training:** Continually pre-trained Qwen3.5 4B for use as a world model for GUI agents on approximately 500,000 trajectories assembled from public GUI-agent benchmarks and custom in-house data, with an average trajectory length of 22 interaction turns.
- **World Model Development:** Integrated and evaluated Qwen-AgentWorld and ViMo for Android GUI agents, combining language-based environment simulation with diffusion-based visual next-state prediction to generate interaction trajectories for long-horizon planning.
- **RL Post-Training:** Built distributed PyTorch/DDP pipelines to post-train multimodal foundation models with SFT, DPO, and GRPO, supporting scalable reinforcement-learning workloads for planning, reasoning, grounding, verification, and error recovery.
- **Model Optimization:** Compressed Qwen2.5-VL from 3.75B to 1.4B parameters using structured depth pruning, knowledge distillation from a 7B teacher, and quantization-aware training, reducing compute and memory requirements for efficient multimodal inference.
- **Model Serving:** Deployed and evaluated a Qwen3.5 2B model with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Robotics Model Fine-Tuning:** Collaborated on fine-tuning Physical Intelligence’s π0.5 vision-language-action model for robotic-arm control in automotive hardware testing.

### Agentic Multimodal Research Label Variants

- **RL Post-Training:** Built distributed PyTorch/DDP pipelines to post-train multimodal foundation models with SFT, DPO, and GRPO, supporting scalable reinforcement-learning workloads for planning, reasoning, grounding, verification, and error recovery.
- **Agentic AI Systems:** Architected a LangGraph-based multimodal agent system for long-horizon Android app and browser workflows, coordinating task decomposition, visual grounding, tool execution, verification, dynamic replanning, and error recovery on real devices.
- **Model Evaluation:** Engineered evaluation and observability infrastructure that logged screenshots, model outputs, tool actions, latency, execution plans, and step traces to isolate failure modes and measure end-to-end task success on real Android devices.
- **Voice AI Evaluation:** Built multimodal-agent evaluation infrastructure integrating reasoning voice agents to accept user voice input and test in-vehicle HMI voice capabilities.
- **Robotics Model Fine-Tuning:** Collaborated on fine-tuning Physical Intelligence’s π0.5 vision-language-action model for robotic-arm control in automotive hardware testing.

### Prior Volkswagen Resume Wording

- Developed and optimized Qwen2.5-VL for multimodal scene understanding and ego-trajectory prediction in autonomous driving, constructing 8L, 6L, and 4L depth-pruned variants that reduced parameters from 3.75B to 1.4B for real-time deployment under edge compute and memory constraints.
- Distilled knowledge from a Qwen2.5-VL 7B teacher into the pruned ego-trajectory prediction model and applied quantization-aware training to preserve accuracy while reducing latency for constrained automotive deployment.
- Engineered scalable pipelines using PyTorch with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, supporting task-specific benchmarking and performance validation.
- Deployed and optimized Qwen3.5 inference up to 35B across TensorRT-LLM and vLLM, configuring prefix caching and long-context serving while using NVIDIA Nsight Systems/Compute to isolate bottlenecks and improve latency and throughput.
- Built distributed PyTorch/DDP pipelines for multimodal foundation models, supporting scalable multi-GPU training, task-specific evaluation, and performance validation.
- Compressed Qwen2.5-VL from 3.75B to 1.4B parameters using structured depth pruning, knowledge distillation from a 7B teacher, and quantization-aware training, reducing compute and memory requirements for efficient inference.
- Architected a LangGraph-based multimodal agent harness for long-horizon Android app and browser automation, coordinating task decomposition, visual grounding, ADB tool execution, action verification, dynamic replanning, and error recovery on real devices.
- Built evaluation and profiling tools for Android agents, logging execution traces and latency to measure task success, characterize workloads, and diagnose regressions and failures.
- Integrated Qwen-AgentWorld and ViMo as complementary language and visual simulators for Android GUI agents, predicting UI-state transitions under candidate actions to support long-horizon evaluation, workload characterization, and action-outcome analysis.
- Profiled Qwen3.5 models up to 35B on NVIDIA GPUs using TensorRT-LLM and NVIDIA Nsight Systems/Compute, characterizing latency, throughput, memory-versus-compute bottlenecks, and long-context inference behavior for agentic workloads.
- Engineered agent evaluation and workload-characterization infrastructure that configured experiments, captured screenshots, model outputs, tool actions, latency, execution plans, and step traces, and identified regressions and failure modes across real-device Android workflows.
- Built distributed PyTorch/DDP pipelines to post-train multimodal foundation models with SFT, DPO, and GRPO, supporting scalable reinforcement-learning workloads for planning, reasoning, visual grounding, verification, and error recovery.
- Profiled and optimized Qwen3.5 models up to 35B on NVIDIA GPUs using TensorRT-LLM and NVIDIA Nsight Systems/Compute, identifying memory-versus-compute bottlenecks and tuning latency, throughput, and long-context inference.
- Prototyped CUDA kernels for FlashAttention-style transformer attention, analyzing memory-access patterns, tiling strategies, and GPU parallelism for low-latency foundation-model inference.
- Compressed Qwen2.5-VL from 3.75B to 1.4B parameters using structured depth pruning, knowledge distillation from a 7B teacher, and quantization-aware training, reducing compute and memory requirements for efficient multimodal inference.
- Integrated and evaluated Qwen-AgentWorld and ViMo for Android GUI agents, combining language-based environment simulation with diffusion-based visual next-state prediction to generate interaction trajectories for long-horizon planning.
- Post-trained multimodal foundation models with SFT, DPO, and GRPO-based reinforcement learning using distributed PyTorch/DDP pipelines for planning, reasoning, visual grounding, verification, and error recovery.
- Compressed Qwen2.5-VL from 3.75B to 1.4B parameters through structured pruning, knowledge distillation from a 7B teacher, and quantization-aware training, reducing compute and memory requirements for real-time multimodal inference.
- Deployed and profiled Qwen3.5 models up to 35B with TensorRT-LLM on Azure ML endpoints, using NVIDIA Nsight Systems/Compute to identify memory-versus-compute bottlenecks and optimize latency and throughput for long-context agent inference.
- Integrated and evaluated Qwen-AgentWorld as a language world model for Android GUI agents, simulating UI-state transitions and rewards from agent actions to generate interaction trajectories for long-horizon planning, reinforcement learning, and evaluation.
- Integrated a diffusion-based world model into a multimodal agent framework to predict future environment states under candidate actions, improving long-horizon decision-making and dynamic replanning in real-device workflows.
- Architected a LangGraph-based multimodal agent harness and execution loop for long-horizon Android app and browser automation, coordinating task decomposition, visual grounding, ADB tool execution, action verification, dynamic replanning, and error recovery on real devices.
- Engineered agent evaluation, observability, and workload-profiling infrastructure that logged screenshots, model outputs, tool actions, latency, execution plans, and step traces to isolate failure modes and measure end-to-end task success on real Android devices.
- Post-trained multimodal foundation models with SFT and DPO plus GRPO-based reinforcement learning for specialized planner, reasoner, grounder, verifier, and error-recovery components in computer-use workflows.
- Architected a LangGraph-based multimodal computer-use agent for long-horizon Android app and browser automation, orchestrating task decomposition, visual grounding, ADB tool execution, action verification, dynamic replanning, and error recovery on real devices.
- Built agent evaluation and workload-analysis infrastructure capturing screenshots, parsed model outputs, latency, execution plans, and step histories to diagnose failure modes and measure long-horizon task completion on real Android devices.
- Post-trained multimodal foundation models with SFT, DPO, and GRPO-based reinforcement learning for specialized planner, reasoner, grounder, verifier, and error-recovery components in computer-use workflows.
- Deployed and profiled Qwen3.5 models up to 35B with TensorRT-LLM on Azure ML endpoints, using NVIDIA Nsight Systems/Compute to identify memory-versus-compute bottlenecks, reduce inference latency, and improve throughput.
- Developed and optimized Qwen2.5-VL for multimodal scene understanding and ego-trajectory prediction in autonomous driving, constructing 8L, 6L, and 4L depth-pruned variants that reduced parameters from 3.75B to 1.4B for real-time deployment under edge compute and memory constraints.
- Distilled knowledge from a Qwen2.5-VL 7B teacher into the pruned ego-trajectory prediction model and applied quantization-aware training to preserve accuracy while reducing latency for constrained automotive deployment.
- Engineered scalable pipelines using PyTorch with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, supporting task-specific benchmarking and performance validation.
- Deployed and profiled Qwen3.5 models up to 35B with TensorRT-LLM on Azure ML endpoints, using NVIDIA Nsight Systems/Compute to diagnose memory-versus-compute bottlenecks and tune throughput and latency.
- Developed and optimized Qwen2.5-VL for multimodal scene understanding and trajectory prediction in autonomous driving, constructing 8L, 6L, and 4L depth-pruned variants that reduced parameters from 3.75B to 1.4B for real-time deployment under edge compute and memory constraints.
- Distilled knowledge from a Qwen2.5-VL 7B teacher into the pruned trajectory-prediction model and applied quantization-aware training to preserve accuracy while reducing latency for constrained automotive deployment.
- Built distributed PyTorch/DDP pipelines for multimodal autonomous-driving models, supporting scene-understanding and trajectory-prediction training, task-specific evaluation, and performance validation.
- Compressed Qwen2.5-VL for autonomous-driving trajectory prediction from 3.75B to 1.4B using structured pruning, knowledge distillation from a 7B teacher, and quantization-aware training to reduce inference latency while maintaining accuracy under edge constraints.
- Built distributed PyTorch/DDP pipelines for multimodal autonomous-driving models, supporting scalable training, trajectory-prediction evaluation, and performance validation across transformer-based architectures.
- Implemented depth pruning for Qwen2.5-VL by constructing 8L, 6L, and 4L student variants, mapping selected teacher layers and preserving compatible vision-language weights for constrained autonomous-driving deployment.
- Built multi-task VLM fine-tuning pipelines for automotive HMI reasoning, combining toggle-state prediction, step decomposition, and UI grounding with DDP training and task-specific evaluation.
- Post-trained multimodal foundation models with SFT, DPO, and GRPO for specialized reasoner, grounder, verifier, and error-recovery components in real-device automotive workflows.
- Post-trained multimodal foundation models with SFT, DPO, and GRPO for specialized planner, reasoner, grounder, verifier, and error-recovery components in real-device automotive workflows.
- Built multimodal-agent evaluation infrastructure capturing screenshots, model outputs, latency, execution plans, and step histories to diagnose failure modes and benchmark task-completion success.
- Post-trained multimodal foundation models with SFT, DPO, and GRPO to improve planning, reasoning, grounded perception, tool execution, verification, and error recovery for long-horizon agentic workflows on real automotive devices.
- Designed long-horizon planning for a multimodal multi-agent system that decomposed natural-language HMI goals, coordinated grounding and tool-use components, and used a diffusion-based world model to predict future states and dynamically replan from verification feedback.
- Built a multimodal GUI-agent system for real-device Android HMI workflows, integrating visual screen understanding, element grounding, ADB tool execution, action verification, and error recovery across in-vehicle applications.
- Built multimodal-agent evaluation infrastructure capturing screenshots, model outputs, latency, execution plans, and step histories to diagnose failure modes and benchmark long-horizon task-completion success on real devices.
- Deployed and profiled Qwen3.5 models up to 35B on Azure ML endpoints with TensorRT-LLM and NVIDIA Nsight Systems/Compute, tuning throughput, latency, caching, and long-context inference.
- Designed long-horizon planning for a multimodal multi-agent system that decomposed natural-language automotive HMI goals into executable steps, coordinated grounding and tool-use components, and dynamically replanned from verification feedback.
- Integrated a diffusion-based world model into the multi-agent HMI framework to predict future environment states under candidate actions and improve long-horizon decision-making.
- Post-trained multimodal foundation models with SFT, DPO, and GRPO for specialized planning, reasoning, grounding, verification, and error-recovery components in real-device automotive workflows.
- Built evaluation and analysis infrastructure for multimodal agents, capturing screenshots, model outputs, latency, execution plans, and step histories to diagnose failure modes and measure long-horizon task completion.
- Compressed Qwen2.5-VL for autonomous-driving trajectory prediction from 3.75B to 1.4B parameters through structured pruning, knowledge distillation from a 7B teacher, and quantization-aware training for constrained edge deployment.
- Integrated a diffusion-based world-model approach into the multi-agent automotive HMI testing framework, predicting future environment states from candidate actions to enable more reliable long-horizon decision-making.
- Fine-tuned multimodal foundation models using SFT, DPO, and GRPO for planner, reasoner, grounder, verifier, and error-recovery components in real-device automotive HMI software testing.
- Compressed Qwen2.5-VL for autonomous-driving trajectory prediction, reducing parameters from 3.75B to 1.4B through pruning, then distilling knowledge from the 7B teacher model and applying quantization-aware training to preserve performance under constrained edge deployment.
- Built multimodal GUI-agent system for real-device Android HMI software testing, combining screen understanding, element grounding, tool-use actions, action verification, and error recovery across in-vehicle app workflows.
- Served custom VLM checkpoints with vLLM continuous batching and optimized attention backends to improve throughput and latency for agentic AI inference workloads.

### Prior CWRU Resume Wording

- Developed LIT-LVM, a latent-variable method for structured interaction modeling that outperformed elastic net, hierarchical lasso, and factorization-machine baselines across simulated and real-world datasets.
- Developed an adaptive mixed-precision KV-cache quantization method based on key/value norm imbalance, achieving 2x memory reduction with >94% accuracy retention across LLMs up to 70B parameters.
- Developed LIT-LVM using latent variable embeddings, structured regularization, and GNN-based higher-order interactions, outperforming GNN, Factorization Machine, and elastic net baselines in ranking and recommendation tasks.
- Developed DEASurv, a multimodal predictive model combining entity-specific embeddings, attention, and contrastive learning for large-scale medical datasets.
- Developed DEASurv, a deep multimodal model leveraging entity-specific embeddings, attention mechanisms, and contrastive loss to improve prediction on large-scale medical datasets.

### Foundation Model / Applied Research

- Fine-tuned multimodal foundation models using SFT, DPO, and GRPO for planner, reasoner, grounder, verifier, and error-recovery components in real-device automotive HMI software testing.
- Built multimodal GUI-agent system for real-device Android HMI software testing, combining screen understanding, element grounding, tool-use actions, action verification, and error recovery across in-vehicle app workflows.
- Developed long-horizon planning workflows for automotive HMI test agents, including dynamic task decomposition, app navigation, action execution, and completion-evidence tracking for multi-step validation goals.
- Post-trained multimodal foundation models using SFT, DPO, and GRPO for reasoning, grounding, and task execution in automotive AI workflows.
- Built multi-task VLM fine-tuning pipelines for automotive HMI reasoning, combining toggle-state prediction, step decomposition, and UI grounding with DDP training and task-specific evaluation.
- Developed long-horizon planning workflows for multimodal foundation-model systems, including task decomposition, dynamic planning, and agentic reasoning for automotive HMI automation.
- Developed multimodal task-planning workflows that translate natural-language automotive HMI goals into executable action sequences, supporting evaluation of reasoning and grounding behavior.
- Built GUI-agent system for real-device app and browser automation on Android, combining screen understanding, element grounding, ADB action execution, action verification, and error recovery across different Android platforms.
- Built multimodal GUI-agent system for real-device Android app and browser automation, combining visual screen understanding, element grounding, tool-use actions, verification, and error recovery across Android platforms.
- Developed long-horizon planning workflows for GUI agents, including dynamic task planning, task decomposition, app/browser navigation, and completion-evidence tracking for multi-step user goals.
- Developed long-horizon multimodal reasoning workflows for GUI agents, including dynamic planning, task decomposition, app/browser navigation, and completion-evidence tracking for evaluation of multi-step goals.
- Fine-tuned multimodal foundation models using SFT, DPO, and GRPO for specialized planner, reasoner, grounder, verifier, and error recovery components in real-device GUI automation.
- Instrumented agent runs with screenshots, parsed model outputs, latency, path plans, and step histories to diagnose robustness failures and improve long-horizon task completion on Android workflows.

### Audio / Voice AI

- Built multimodal-agent evaluation infrastructure to benchmark task completion, integrating reasoning voice agents to accept user voice input and test in-vehicle HMI voice capabilities.
- Evaluated in-vehicle audio functionality using OpenAI voice models as part of automotive testing workflows.

### Deployment / Serving

- Compressed VLMs using pruning, knowledge distillation, and quantization-aware training for constrained deployment, improving inference efficiency for agentic AI workloads.
- Developed multimodal inference and evaluation infrastructure for automotive AI workflows, measuring latency, throughput, task accuracy, and serving reliability across large VLM experiments.
- Deployed and evaluated a Qwen3.5 2B model with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- Deployed and profiled Qwen3.5 models up to 35B with TensorRT-LLM on Azure ML endpoints, using NVIDIA Nsight Systems/Compute to diagnose memory versus compute bottlenecks and tune throughput/latency.
- Architected multimodal inference and evaluation infrastructure for automotive AI workflows, measuring latency, throughput, task accuracy, and serving reliability for large VLM deployment with vLLM.
- Applied pruning, knowledge distillation, and quantization-aware training to compress VLMs for constrained deployment, then served custom checkpoints with vLLM continuous batching to improve throughput and latency for GUI-agent inference.
- Compressed VLMs using pruning, knowledge distillation, and quantization-aware training, then served custom checkpoints with vLLM continuous batching and optimized attention backends to improve GUI-agent inference throughput and latency.

### Pruning / Compression

- Implemented depth-pruning for Qwen2.5-VL by constructing 8L, 6L, and 4L student variants, mapping selected teacher layers and preserving compatible vision-language weights for constrained deployment.
- Optimized Qwen2.5-VL for autonomous-driving trajectory prediction, reducing parameters from 3.75B to 1.4B through pruning for deployment under edge compute and memory constraints.
- Distilled knowledge from Qwen2.5-VL 7B into the pruned 1.4B trajectory-prediction model, applying quantization-aware training to preserve VLM performance under constrained deployment settings.

### GPU Performance / Inference Optimization

- Optimized Qwen3.5 inference up to 35B across TensorRT-LLM and vLLM, using NVIDIA Nsight Systems/Compute to isolate memory- and compute-bound bottlenecks and improve serving latency and throughput.
- Prototyped CUDA kernels for FlashAttention-style transformer attention, exploring memory access patterns, tiling strategies, and GPU parallelism for low-latency inference workloads.
- Optimized Qwen2.5-VL for constrained automotive inference by depth-pruning 8L, 6L, and 4L student variants, reducing GPU memory footprint while preserving compatible vision-language weights.
- Compressed Qwen2.5-VL 7B into a pruned 1.4B trajectory-prediction model using knowledge distillation and quantization-aware training for lower-memory, deployment-ready inference.
- Built distributed PyTorch/DDP pipelines for multi-task automotive VLM workloads, supporting scalable training, task-specific evaluation, and performance validation across transformer-based models.
- Profiled and optimized TensorRT-LLM serving for Qwen3.5 models up to 35B on NVIDIA GPUs, using NVIDIA Nsight Systems/Compute to diagnose memory-vs-compute bottlenecks and tune throughput/latency.
- Served custom VLM checkpoints with vLLM continuous batching and optimized attention backends, applying CUDA/FlashAttention systems knowledge to improve throughput and latency for GUI-agent inference.

### Earlier Experience

- Nexteer Automotive — Software Intern, Auburn Hills, Michigan (2020): Developed a data pipeline for electric power-steering test data, enabling structured analysis and validation of steering-system responses for ADAS applications.
- Developed large-scale ML pipelines over 500,000+ records in PyTorch for preprocessing, distributed data handling, model development, and evaluation.
- Fine-tuned Llama-2 using PyTorch FSDP/DDP for scalable multi-GPU training and quantized deployment.

## Skills Bank

### Currently Active

- Programming / Infrastructure: Python, C++, SQL, Docker, Git
- Machine Learning: PyTorch, TensorFlow, Transformers, Reinforcement Learning, Graph Neural Networks
- Performance Optimization: vLLM
- Agentic AI: LangGraph, Computer-Use Agents, Tool Use, Dynamic Planning, Agent Evaluation

### Stable Skills Taxonomy

Use the four active categories above as the default structure across applications. Tailor by reordering or replacing only a small number of verified technologies from the role-dependent pool. Keep category names broad and durable; job-specific capabilities such as prefix caching, long-context inference, workload characterization, and GPU profiling belong primarily in experience bullets unless they are broadly useful for the target role. Python and PyTorch are permanent core skills and should normally appear in every application.

The default core pool contains 22 reusable skills: Python, C++, SQL, PyTorch, TensorFlow, Transformers, Deep Learning, Large Language Models, Multimodal Learning, Reinforcement Learning, Graph Neural Networks, vLLM, TensorRT-LLM, CUDA, NVIDIA Nsight, Quantization, Knowledge Distillation, Structured Pruning, Distributed Training, Azure ML, Docker, and Git.

For agent-focused applications, introduce a dedicated category such as `Agentic AI: LangGraph, Computer-Use Agents, Tool Use, Dynamic Planning, Agent Evaluation`. Do not place LangGraph under ML Systems. Select only verified agentic skills appropriate to the role, while retaining PyTorch under Machine Learning.

### Role-Dependent / Bring Back When Relevant

- CUDA
- Triton
- MLIR
- Custom Kernel Development
- Kernel Optimization
- ML Runtime Optimization
- Inference Benchmarking
- Time to First Token
- Inter-Token Latency
- P95 Latency
- Token Throughput
- Maximum Concurrency
- Computer-Use Agents
- Qwen-AgentWorld
- ViMo
- Agent Simulation
- Agent Evaluation
- Task-Completion Evaluation
- Benchmarking
- Workload Characterization
- Failure Analysis
- FSDP
- DDP
- Distributed Training
- Multi-GPU Training
- FlashAttention
- Azure ML
- ADB
- Diffusion Models
- SSH
- Flask
- Redis
- LangChain
- LangGraph
- PyTorch Geometric
- NumPy
- Pandas
- Agentic RAG
- Embeddings
- Graph Neural Networks
- NVIDIA Nsight Systems/Compute
- TensorRT-LLM
- SQL
- Dynamic Planning
- World Models
- Trace Logging
- Latency/Throughput Tuning
- Model Serving
- Long-Horizon Planning
- Voice Agents
- Tool Use
- GUI Agents
- Multi-Agent Workflows
- Reinforcement Learning
- SFT
- DPO
- GRPO
- Trajectory Prediction
- Scene Understanding
- Ego-Trajectory Prediction
- Transformers
- TensorFlow
- Vision-Language Models
- Visual Grounding
- Segmentation
- Knowledge Distillation
- Quantization-Aware Training
- Structured Pruning
- Prefix Caching
- Long-Context Inference
- GPU Inference Profiling
- Vision-Language-Action Models
- Robotics Model Fine-Tuning
- Automotive Hardware Testing
- Refinery-Domain Language Models
- Water-Pressure Prediction
- Water-Grid Systems

## Apple Agentic Vision-Language Models (200657911)

- Summary: AI Engineer and Computer Science PhD specializing in multimodal modeling, agentic AI, and deep learning. Experienced developing vision-language agents, fine-tuning foundation models, and building evaluation pipelines to measure capabilities and diagnose failure modes.
- Scene-understanding variant: Fine-tuned and optimized Qwen3.5 for multimodal scene understanding and ego-trajectory prediction in autonomous driving, reducing parameters from 3.75B to 1.4B through structured depth pruning for deployment under edge compute and memory constraints.
- Selection: Lead Volkswagen with the archived LangGraph agent-system bullet, followed by evaluation and RL post-training. Restore the TMLR (2025) publication sentence to LIT-LVM and lead Sherwin-Williams with multimodal grounding.
- Preserved alternatives: The prior general Qwen2.5-VL compression bullet (including knowledge distillation and quantization-aware training) and Qwen3.5 TensorRT-LLM/vLLM inference-optimization bullet remain above for inference-focused roles.
- Role-dependent skills: Retain Multimodal Learning, Deep Learning, Large Language Models, Model Evaluation, and Graph Neural Networks for future applications. This application uses a dedicated Agentic AI category and Vision-Language Models under Machine Learning.

## Waymo Perception LLM/VLM (4430)

- Summary: AI Engineer and Computer Science PhD specializing in multimodal foundation models, autonomous-driving perception, and scalable deep learning. Experienced continually pre-training and evaluating vision-language models, developing trajectory-prediction systems, and building distributed training and deployment pipelines.
- **Continual Pre-Training:** Continually pre-trained Qwen3.5 4B for use as a world model for GUI agents on approximately 500,000 trajectories assembled from public GUI-agent benchmarks and custom in-house data, with an average trajectory length of 22 interaction turns.
- **Autonomous-Driving Perception:** Fine-tuned and optimized Qwen3.5 for multimodal scene understanding and ego-trajectory prediction in autonomous driving, reducing parameters from 3.75B to 1.4B through structured depth pruning for deployment under edge compute and memory constraints.
- **Training & Evaluation:** Engineered scalable pipelines using PyTorch with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, supporting task-specific benchmarking and performance validation.
- **Model Deployment:** Deployed and evaluated a Qwen3.5 2B model with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Robotics Model Fine-Tuning:** Collaborated on fine-tuning Physical Intelligence's π0.5 vision-language-action model for robotic-arm control in automotive hardware testing.
- CWRU selection: Lead with the adaptive mixed-precision KV-cache quantization contribution, followed by DEASurv and LIT-LVM. Do not assign a separate method name or append a publication-status statement to the KV-cache bullet.
- Role-dependent skills: Continual Learning, Vision-Language Models, Knowledge Distillation, Structured Pruning, Quantization-Aware Training, Model Evaluation, Distributed Training, vLLM, and TensorRT-LLM.
- Skills grouping: Place Model Evaluation under Machine Learning, not Model Optimization.
- Education: Retain only the PhD entry for this application, per user preference.

## Waymo Perception Machine Learning Engineer (4299)

- Summary: AI Engineer and Computer Science PhD specializing in autonomous-driving perception, multimodal foundation models, and computer vision. Experienced developing models for road understanding, motion planning, and ego-trajectory prediction, scaling pre-training, post-training, and distributed fine-tuning, and building model-evaluation pipelines for production systems.
- **Autonomous-Driving Perception:** Fine-tuned and optimized Qwen3.5 for multimodal road understanding and ego-trajectory prediction in autonomous driving, reducing parameters from 3.75B to 1.4B through structured depth pruning for deployment under edge compute and memory constraints.
- **Continual Pre-Training:** Continually pre-trained Qwen3.5 4B for use as a world model for GUI agents on approximately 500,000 trajectories assembled from public GUI-agent benchmarks and custom in-house data, with an average trajectory length of 22 interaction turns.
- **Model Training & Evaluation:** Engineered scalable PyTorch pipelines with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, developing task-specific metrics and regression checks to measure and improve performance.
- **Distributed Fine-Tuning:** Built distributed PyTorch pipelines with DDP for SFT, DPO, and GRPO post-training of multimodal foundation models, supporting scalable fine-tuning, evaluation, and regression analysis.
- **Model Deployment:** Deployed and evaluated a Qwen3.5 2B model with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Object Detection & Semantic Segmentation:** Built and deployed a VLM-based perception system integrating LLaVA, vision transformers, and SAM for natural-language object detection, grounding, and semantic segmentation, improving segmentation quality by 7% IoU.
- Skills: Machine Learning includes Python, PyTorch, TensorFlow, Transformers, Computer Vision, and Model Evaluation. Perception includes Object Detection, Semantic Segmentation, Road Understanding, and Vision-Language Models. Model Optimization includes Knowledge Distillation, Structured Pruning, and Quantization-Aware Training. ML Systems includes Distributed Training, DDP, vLLM, and Docker.
- Education: Retain only the PhD entry for this application, per user preference.

## Waymo Research Scientist, RL for Autonomous Planning & World Modeling (4391)

- Summary: AI Engineer and Computer Science PhD specializing in reinforcement learning, world modeling, multimodal foundation models, and autonomous planning. Experienced post-training and evaluating world models, developing trajectory-planning systems, applying model distillation, and building scalable distributed training pipelines.
- **RL Post-Training:** Post-trained multimodal foundation models with SFT, DPO, and GRPO-based reinforcement learning using distributed PyTorch pipelines with DDP for planning, reasoning, visual grounding, verification, and error recovery.
- **World Model Development:** Integrated and evaluated Qwen-AgentWorld and ViMo for GUI agents, combining language-based environment simulation with diffusion-based visual next-state prediction to generate interaction trajectories for long-horizon planning.
- **Continual Pre-Training:** Continually pre-trained Qwen3.5 4B for use as a world model for GUI agents on approximately 500,000 trajectories assembled from public GUI-agent benchmarks and custom in-house data, with an average trajectory length of 22 interaction turns.
- **Trajectory Planning & Distillation:** Compressed a multimodal model for autonomous-vehicle trajectory planning from 3.75B to 1.4B using structured pruning, knowledge distillation from a 7B teacher, and quantization-aware training for constrained deployment.
- **Model Training & Evaluation:** Engineered scalable PyTorch pipelines with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, developing task-specific metrics and regression checks to measure and improve performance.
- CWRU selection: Lead with the adaptive mixed-precision KV-cache quantization contribution, followed by the TMLR-published LIT-LVM contribution and DEASurv.
- Skills: Programming includes Python, C++, and SQL. Machine Learning includes PyTorch, TensorFlow, Transformers, Multimodal Learning, and Model Evaluation. Reinforcement Learning includes SFT, DPO, GRPO, World Models, and Dynamic Planning. ML Systems includes Distributed Training, FSDP, DDP, vLLM, and Docker.
- Responsibility terms used: Foundation World Model post-training and evaluation, RL, distillation, autonomous trajectory planning, scalable distributed model training, and post-training best practices.
- Unsupported terms omitted: learning from demonstration, Bayesian inference, hierarchical learning, rigorous ablations, many-machine training, tensor parallelism, and first-author top-tier publications.
- Education: Retain only the PhD entry for this application.

## Waymo Senior Machine Learning Engineer, Perception LLM/VLM (4430)

- Internal posting identifier: `0b601099539888e8964e1374d3010eb9`. This is distinct from the new-grad posting that shares visible job number 4430 and posting date 2025-12-22.
- Summary: AI Engineer and Computer Science PhD specializing in multimodal foundation models, autonomous-driving perception, continual learning, and scalable ML systems. Experienced building large-scale pre-training and evaluation pipelines, fine-tuning vision-language models for motion planning, and translating research into production-ready deployments.
- **Continual Pre-Training:** Continually pre-trained Qwen3.5 4B for use as a world model for GUI agents on approximately 500,000 trajectories assembled from public GUI-agent benchmarks and custom in-house data, with an average trajectory length of 22 interaction turns.
- **Autonomous-Driving Perception:** Fine-tuned and optimized Qwen3.5 for multimodal road understanding and ego-trajectory prediction in autonomous driving, reducing parameters from 3.75B to 1.4B through structured depth pruning for deployment under edge compute and memory constraints.
- **Model Training & Evaluation:** Engineered scalable PyTorch pipelines with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, developing task-specific metrics and regression checks to measure and improve performance.
- **Production Model Deployment:** Deployed and evaluated a Qwen3.5 2B model with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Robotics Fine-Tuning:** Collaborated on fine-tuning Physical Intelligence's π0.5 vision-language-action model for robotic-arm control in automotive hardware testing.
- CWRU selection: Lead with the adaptive mixed-precision KV-cache quantization contribution, followed by the TMLR-published LIT-LVM contribution and DEASurv.
- Skills: Programming includes Python, C++, and SQL. Machine Learning includes PyTorch, TensorFlow, Transformers, Vision-Language Models, Continual Learning, and Model Evaluation. Model Optimization includes Knowledge Distillation, Structured Pruning, and Quantization-Aware Training. ML Systems includes Distributed Training, DDP, vLLM, and Docker.
- Responsibility terms used: large-scale continual pre-training, VLM foundation models, autonomous-driving perception, motion planning, model evaluation, continual learning, and production-ready deployment.
- Unsupported terms omitted: multimodal sensor-stream integration, large-scale data curation and quality assurance, and explicit transferability metrics.
- Education: Retain only the PhD entry.

## Waymo Machine Learning Engineer / Applied Scientist, Prediction & Planning (3265)

- Summary: AI Engineer and Computer Science PhD specializing in autonomous planning and prediction, generative world models, reinforcement learning, and multimodal foundation models. Experienced designing and evaluating trajectory-prediction systems, post-training foundation models, and translating research into scalable production ML systems.
- **Autonomous Prediction & Planning:** Fine-tuned and optimized a multimodal Qwen3.5 model for road understanding and ego-trajectory prediction in autonomous driving, reducing parameters from 3.75B to 1.4B through structured depth pruning for constrained deployment.
- **Generative World Models:** Integrated and evaluated Qwen-AgentWorld and ViMo for GUI agents, combining language-based environment simulation with diffusion-based visual next-state prediction to generate interaction trajectories for long-horizon planning.
- **RL Foundation-Model Post-Training:** Post-trained multimodal foundation models with SFT, DPO, and GRPO-based reinforcement learning using distributed PyTorch pipelines with DDP for planning, reasoning, visual grounding, verification, and error recovery.
- **Model Evaluation:** Engineered scalable PyTorch pipelines with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, developing task-specific metrics and regression checks to measure and improve performance.
- **Production ML Systems:** Deployed and evaluated a Qwen3.5 2B model with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- CWRU selection: Lead with the adaptive mixed-precision KV-cache quantization contribution, followed by the TMLR-published LIT-LVM contribution and DEASurv.
- Skills: Programming includes Python, C++, and SQL. Machine Learning includes PyTorch, TensorFlow, Transformers, Generative Models, and Model Evaluation. Planning & Prediction includes Reinforcement Learning, World Models, Motion Planning, Trajectory Prediction, and Dynamic Planning. ML Systems includes Distributed Training, FSDP, DDP, vLLM, and Docker.
- Responsibility terms used: generative models, autonomous planning and prediction, foundation models, reinforcement learning, model evaluation, motion planning, and production ML systems.
- Unsupported terms omitted: causal reasoning, widely adopted open-source projects, and a top-tier conference publication track record. Safe and smooth planning objectives were not claimed without a supporting outcome.
- Education: Retain only the PhD entry.

## Waymo Senior Machine Learning Engineer, Computer Vision/VLM (3742)

- Posting metadata: Internal identifier `06b58049383ff8530d321af18857d01f`; posted September 16, 2025.
- Summary: AI Engineer and Computer Science PhD specializing in computer vision, multimodal perception, vision-language models, and agentic AI. Experienced training and evaluating deep-learning models, developing scalable AI-agent systems, and translating foundation-model research into production ML systems.
- **Multimodal Perception:** Fine-tuned and optimized Qwen3.5 for road understanding and ego-trajectory prediction in autonomous driving, reducing parameters from 3.75B to 1.4B through structured depth pruning for constrained deployment.
- **Scalable AI-Agent Systems:** Architected a LangGraph-based multimodal agent system for long-horizon Android app and browser workflows, coordinating task decomposition, visual grounding, tool execution, verification, dynamic replanning, and error recovery on real devices.
- **RL Foundation-Model Fine-Tuning:** Post-trained multimodal foundation models with SFT, DPO, and GRPO-based reinforcement learning using distributed PyTorch pipelines with DDP for reasoning, visual grounding, verification, and error recovery.
- **Model Training & Evaluation:** Engineered scalable PyTorch pipelines with DDP to train and evaluate multimodal models for scene understanding and ego-trajectory prediction, developing task-specific metrics and regression checks to measure and improve performance.
- **Large-Scale Pre-Training Data:** Continually pre-trained Qwen3.5 4B for use as a world model for GUI agents on approximately 500,000 trajectories assembled from public benchmarks and custom in-house data, averaging 22 interaction turns per trajectory.
- Sherwin-Williams selection: Retain the object-detection, visual-grounding, and semantic-segmentation bullet with its 7% IoU improvement to provide direct computer-vision evidence.
- Skills: Programming includes Python, C++, and SQL. Machine Learning includes PyTorch, TensorFlow, Transformers, Reinforcement Learning, and Model Evaluation. Computer Vision includes Vision-Language Models, Object Detection, Semantic Segmentation, Visual Grounding, and Scene Understanding. Agentic AI includes LangGraph, Computer-Use Agents, Tool Use, Dynamic Planning, and Agent Evaluation.
- Responsibility terms used: computer vision, multimodal perception, rich scene understanding, AI-agent systems, fine-tuning, reinforcement learning, visual grounding, model lifecycle, and large-scale pre-training data.
- Unsupported terms omitted: video understanding, RAG, causal reasoning, captioning, self-supervised learning, weakly supervised learning, and RLHF/RLAIF. Do not imply that GUI-agent trajectory assembly was an autonomous-driving autolabeling pipeline.
- Education: Retain only the PhD entry.

## Waymo Senior Machine Learning Engineer, Runtime and Serving (4792)

- Posting metadata: Internal identifier `b052b333d143a0bb596c4f08e051a3a1`; posted April 29, 2026.
- Summary: AI Engineer and Computer Science PhD specializing in ML runtimes, LLM serving, compiler and kernel optimization, and GPU acceleration. Experienced optimizing CUDA, Triton, and MLIR workloads, profiling foundation-model inference, and building high-concurrency serving systems for constrained compute environments.
- **Runtime & Kernel Acceleration:** Developed CUDA and Triton kernels for transformer operators and used MLIR-based compiler workflows to optimize fusion, tensor layouts, memory access, and launch overhead for GPU inference.
- **LLM Serving Benchmarks:** Built a vLLM benchmark suite for Qwen3.5 2B that measured time to first token, inter-token latency, tokens per second, P95 latency, GPU memory, and maximum concurrency across batch sizes, context lengths, and prefix-cache hit rates.
- **Production Model Serving:** Deployed and evaluated Qwen3.5 2B with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Hardware-Aware Profiling:** Profiled and optimized Qwen3.5 models up to 35B with TensorRT-LLM and vLLM, using NVIDIA Nsight Systems/Compute to identify memory- and compute-bound bottlenecks across long-context inference workloads.
- **Model Compression:** Fine-tuned and optimized Qwen3.5 for autonomous-driving scene understanding and ego-trajectory prediction, reducing parameters from 3.75B to 1.4B through structured depth pruning for edge compute and memory constraints.
- **Distributed ML Systems:** Engineered PyTorch pipelines with DDP to train and evaluate multimodal foundation models, developing task-specific metrics and regression checks for performance validation.
- Sherwin-Williams runtime variant: **Real-Time Vision Inference:** Designed and deployed a vision-transformer inference pipeline for SAM, tuning runtime latency and improving segmentation quality by 7% IoU through inference evaluation and pipeline optimization.
- Beyond AI selection: Retain the Llama-2 FSDP/DDP multi-GPU training and quantized-deployment bullet; omit the graph-model bullet when runtime specialization needs the space.
- Skills: Programming includes C++, Python, CUDA, and Triton. ML Runtimes includes TensorRT-LLM, vLLM, PyTorch, MLIR, and Transformers. Performance Optimization includes NVIDIA Nsight, Kernel Optimization, KV/Prefix Caching, Quantization, and Structured Pruning. ML Systems includes Model Serving, Benchmarking, Distributed Training, FSDP, DDP, and Docker.
- Benchmark matrix: Measure time to first token, inter-token latency, end-to-end P50/P95 latency, request and token throughput, peak GPU memory, and maximum stable concurrency. Sweep batch size, input/output sequence length, prefix-cache hit rate, precision, and concurrent requests. Compare eager/framework baselines with TensorRT-LLM, vLLM, and custom CUDA/Triton operator paths when technically comparable.
- Responsibility terms used: ML runtime, high-concurrency serving, onboard compute constraints, hardware-aware optimization, compiler workflows, custom kernels, profiling, benchmarking, KV/prefix caching, and model compression.
- User-verified additions for future runtime roles: CUDA, Triton, and MLIR experience for model acceleration.
- Unsupported terms omitted: JAX, OpenXLA/PjRT, ONNX Runtime, TVM, continuous batching implementation, distributed inference, unified serving APIs, zero-copy tensor transfer, and shared-memory buffer management. No numerical runtime improvement was invented for the new benchmark suite.
- Education: Retain only the PhD entry.

## Waymo Senior Software Engineer, DevAI (4856)

- Posting metadata: Internal identifier `4cbfabab62ff80fe2d2429558c3b99ee`; posted April 29, 2026.
- Summary: AI Engineer and Computer Science PhD specializing in agentic AI, multi-agent frameworks, retrieval-augmented generation, and production LLM systems. Experienced building and evaluating autonomous agents, fine-tuning foundation models, and developing scalable pipelines for debugging, deployment, and workflow automation.
- **Multi-Agent Frameworks:** Built a production-grade LangGraph-based multimodal multi-agent system for long-horizon Android and browser workflows, orchestrating task decomposition, tool execution, verification, dynamic replanning, and error recovery on real devices.
- **Retrieval-Augmented Generation:** Integrated RAG into LangGraph agents to retrieve relevant task context and execution histories for grounded planning, verification, troubleshooting, and error recovery.
- **Agent Evaluation & Debugging:** Engineered evaluation and observability infrastructure that logged screenshots, model outputs, tool actions, latency, execution plans, and step traces to isolate failure modes and measure end-to-end task success.
- **Foundation-Model Fine-Tuning:** Post-trained multimodal foundation models with SFT, DPO, and GRPO-based reinforcement learning using distributed PyTorch pipelines with DDP for planning, reasoning, grounding, verification, and error recovery.
- **Production LLM Deployment:** Deployed and evaluated Qwen3.5 2B with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Training Data Pipelines:** Continually pre-trained Qwen3.5 4B for use as a GUI-agent world model on approximately 500,000 trajectories assembled from public benchmarks and custom in-house data, averaging 22 interaction turns per trajectory.
- Sherwin-Williams selection: Use the perception-model-development variant to support the posting's perception-debugging domain.
- Beyond AI selection: Use the LLM fine-tuning label for the verified Llama-2 FSDP/DDP bullet.
- Skills: Programming includes Python, C++, and SQL. Agentic AI includes LangGraph, Multi-Agent Systems, Retrieval-Augmented Generation, Tool Use, and Dynamic Planning. Machine Learning includes PyTorch, Transformers, Large Language Models, Reinforcement Learning, and Model Evaluation. ML Systems includes vLLM, Agent Observability, Distributed Training, FSDP, DDP, and Docker.
- Responsibility terms used: multi-agent frameworks, agentic flows, retrieval-augmented generation, troubleshooting, evaluation strategies, data pipelines, production LLM deployment, and workflow automation.
- User-verified addition: Retrieval-Augmented Generation (RAG) experience for agentic systems.
- Unsupported terms omitted: spec-driven development, context-aware code generation, code-writing agents, automated triage, root-cause analysis agents, and claimed adoption by engineering teams. The resume uses adjacent verified agent debugging and workflow automation experience without presenting it as prior DevAI product work.
- Education: Retain only the PhD entry.

## Waymo Senior Software Engineer, Training Efficiency (3627)

- Posting metadata: Internal identifier `ef7b23cc6c81d5912b40a7a9dcc35a30`; posted August 11, 2025.
- Summary: AI Engineer and Computer Science PhD specializing in ML training systems, distributed data pipelines, training efficiency, and GPU performance. Experienced building large-scale training datasets, scaling foundation-model workloads, profiling system bottlenecks, and developing reliable multi-GPU training and evaluation pipelines.
- **Distributed Input Data Pipelines:** Built a training-data pipeline that combined public GUI-agent benchmarks with custom in-house data into approximately 500,000 trajectories averaging 22 interaction turns for continual pre-training of Qwen3.5 4B.
- **Training & Evaluation Infrastructure:** Engineered scalable PyTorch pipelines with DDP to train and evaluate multimodal foundation models, supporting multi-GPU execution, task-specific metrics, regression checks, and performance validation.
- **Distributed Foundation-Model Training:** Built PyTorch pipelines with DDP for SFT, DPO, and GRPO post-training of multimodal models, supporting scalable fine-tuning and evaluation across planning, reasoning, grounding, and verification tasks.
- **System-Level Profiling:** Profiled Qwen3.5 workloads up to 35B with NVIDIA Nsight Systems/Compute, identifying memory- and compute-bound bottlenecks and characterizing latency, throughput, and long-context behavior.
- **Training Runtime Optimization:** Developed CUDA and Triton kernels for transformer operators and used MLIR-based compiler workflows to optimize fusion, tensor layouts, memory access, and kernel-launch overhead.
- **Efficient Model Development:** Reduced Qwen3.5 from 3.75B to 1.4B parameters through structured depth pruning for autonomous-driving scene understanding and ego-trajectory prediction under compute and memory constraints.
- Sherwin-Williams training-efficiency variant: **ML Pipeline Optimization:** Designed and deployed a vision-transformer pipeline for SAM, tuning runtime performance and improving segmentation quality by 7% IoU through evaluation and pipeline optimization.
- Beyond AI training-efficiency variant: **Multi-GPU Training:** Fine-tuned Llama-2 on refinery-domain text using PyTorch FSDP/DDP for scalable distributed training and quantized deployment.
- Skills: Programming includes Python, C++, and SQL. Machine Learning includes PyTorch, TensorFlow, Transformers, Model Training, and Model Evaluation. Distributed Training includes DDP, FSDP, Multi-GPU Training, Data Pipelines, and Performance Validation. Performance Optimization includes NVIDIA Nsight, CUDA, Triton, MLIR, Benchmarking, and Structured Pruning.
- Responsibility terms used: distributed input data pipelines, large-scale ML training, training efficiency, system-level bottlenecks, runtime performance, scalability, profiling, and distributed systems.
- Unsupported terms omitted: JAX, Grain, tf.data service, ML Pathways, and explicit training-goodput improvements. The documented data-pipeline and PyTorch distributed-training experience is adjacent to these requirements but does not claim use of their named Google stack.
- Education: Retain only the PhD entry.

## User Corrections for Future Resumes

- Use **AI Researcher** as the Case Western Reserve University position title, replacing Artificial Intelligence Research Assistant and Artificial Intelligence Researcher.
- The user corrected the Apple scene-understanding / ego-trajectory depth-pruning bullet to **Qwen3.5**. Use the corrected Apple variant in future resumes instead of restoring Qwen2.5-VL from older scene-understanding variants. The approved parameter counts remain 3.75B to 1.4B.
- Older Qwen2.5-VL variants above are historical wording. This correction does not independently verify model names or sizes for their separate teacher-distillation claims.
- Describe the KV-cache research as an adaptive mixed-precision quantization method based on key/value norm imbalance. Do not assign a separate method name or append a publication-status statement.
- For the corrected vLLM deployment bullet, use Qwen3.5 2B without Azure ML or health probes and emphasize improving maximum request concurrency. Preserve separate TensorRT-LLM and larger-model profiling variants for applications where those verified experiences are relevant.
- The user verified object detection and semantic segmentation experience for the Sherwin-Williams perception system.

- User clarification (2026-09-15): Multi-agent framework work includes building the harness, training models, evaluating agent performance, and improving serving. Preserve all four work areas when relevant; the verified application domain remains Android/browser agents.

## NVIDIA Software Engineer, Coding Agent Harness Engineering - New College Grad 2026 (JR2023749)

- Posting date: 2026-09-15. Archive: `applications/Nvidia/9-15-2026/NVIDIA_JR2023749_9-15/`.
- Summary: AI Engineer and Computer Science PhD specializing in agent harnesses, multi-agent systems, and LLM inference. Experienced building agent execution loops, training foundation models, evaluating agent performance, and optimizing model serving.
- **Agent Harness Engineering:** Built a LangGraph-based multimodal multi-agent harness and execution loop for long-horizon Android app and browser workflows, coordinating task decomposition, tool execution, verification, dynamic replanning, and error recovery on real devices.
- **Agent Evaluation & Workload Analysis:** Engineered evaluation and observability infrastructure capturing screenshots, model outputs, tool actions, latency, execution plans, and step traces to diagnose failure modes and measure end-to-end task success.
- **Inference Performance Benchmarks:** Built a vLLM benchmark suite for Qwen3.5 2B measuring time to first token (TTFT), inter-token latency (ITL), token throughput, P95 latency, GPU memory, and concurrency across batch sizes, context lengths, and prefix-cache hit rates.
- **Agent Model Training:** Post-trained multimodal foundation models with SFT, DPO, and GRPO using distributed PyTorch/DDP pipelines for specialized planning, reasoning, grounding, verification, and error-recovery components.
- **Serving Optimization:** Deployed and evaluated Qwen3.5 2B with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **GPU Workload Profiling:** Profiled and optimized Qwen3.5 models up to 35B with TensorRT-LLM and vLLM, using NVIDIA Nsight Systems/Compute to identify memory- and compute-bound bottlenecks across long-context inference workloads.
- Selection: Restored archived harness/execution-loop and agent evaluation variants, retained model post-training and serving improvements, and emphasized TTFT, ITL, throughput, workload analysis, and GPU profiling. Retained CWRU research, Sherwin-Williams pipeline evaluation, Beyond AI distributed training, and Nexteer data pipeline evidence. Displaced training-efficiency bullets remain in the prior Waymo section.
- Skills: Added user-verified Agent Harnesses; selected LangGraph, Multi-Agent Systems, Tool Use, Agent Evaluation, Model Evaluation, distributed training, vLLM, TensorRT-LLM, NVIDIA Nsight, Benchmarking, and Workload Analysis.
- Unsupported requirements omitted: coding-agent harness development at scale, Harbor, hands-on frontier performance work with Codex/Claude Code, hardware/software co-design collaboration, and open-source agent projects. GUI-agent harness experience is presented in its verified domain.

- User correction (2026-09-15): Omit the sentence "Published in Transactions on Machine Learning Research (2025)." from the LIT-LVM resume bullet. Keep the model contribution without the publication sentence in future resumes. This supersedes older selection notes requesting that sentence.

## NVIDIA Senior Deep Learning Compiler Engineer - HW-SW Codesign (JR2019844)

- Posting date: 2026-09-15. Archive: `applications/Nvidia/9-15-2026/NVIDIA_JR2019844_9-15/`. The URL says XLA but the retrieved title is HW-SW Codesign.
- Closest prior application: Waymo Senior Machine Learning Engineer, Runtime and Serving (4792); also compared the Training Efficiency (3627) variants.
- Summary: AI Engineer and Computer Science PhD specializing in GPU kernel optimization, ML compiler workflows, and distributed deep learning. Experienced developing transformer kernels, profiling inference workloads, tuning model performance, and building distributed training pipelines.
- **Compiler & Kernel Optimization:** Developed CUDA and Triton kernels for transformer operators and used MLIR-based compiler workflows to optimize fusion, tensor layouts, memory access, and launch overhead for GPU inference.
- **GPU Performance Analysis:** Profiled and optimized Qwen3.5 models up to 35B with TensorRT-LLM and vLLM, using NVIDIA Nsight Systems/Compute to identify memory- and compute-bound bottlenecks across long-context inference workloads.
- **Performance Benchmarking:** Built a vLLM benchmark suite for Qwen3.5 2B measuring time to first token, inter-token latency, token throughput, P95 latency, GPU memory, and maximum concurrency across batch sizes, context lengths, and prefix-cache hit rates.
- **Distributed Training & Evaluation:** Engineered PyTorch pipelines with DDP to train and evaluate multimodal foundation models, developing task-specific metrics and regression checks for performance validation.
- **Inference Runtime Tuning:** Deployed and evaluated Qwen3.5 2B with vLLM, tuning prefix caching, long-context inference, and serving parameters to improve maximum request concurrency.
- **Model Optimization:** Fine-tuned and optimized Qwen3.5 for autonomous-driving scene understanding and ego-trajectory prediction, reducing parameters from 3.75B to 1.4B through structured depth pruning for edge compute and memory constraints.
- Selection: Lead with verified CUDA/Triton kernel development and MLIR compiler workflows, then GPU performance analysis, benchmarking, distributed training/evaluation, serving tuning, and model compression. Preserve the adaptive mixed-precision KV-cache result, Sherwin-Williams runtime evaluation, Beyond AI FSDP/DDP training, and Nexteer data pipeline. Prior agent-harness wording remains in the preceding NVIDIA entry.
- Skills: C++, Python, CUDA, Triton, MLIR, PyTorch, TensorFlow, Transformers, Deep Learning, Model Evaluation, NVIDIA Nsight, Kernel Optimization, Benchmarking, Quantization, TensorRT-LLM, vLLM, Distributed Training, FSDP, DDP, Docker, Git.
- Unsupported requirements omitted: direct JAX/OpenXLA, LLVM/TVM, graph partitioning, tensor-sharding algorithm design, compiler backend code generation, GPU hardware co-design, mentoring, and a claim of four or more years specifically in compiler optimization. DDP/FSDP experience does not establish novel sharding-algorithm design.
- Persistent correction honored: No TMLR publication sentence in the LIT-LVM bullet.

- User-approved correction for NVIDIA JR2019844 (2026-09-15): **On-Device Inference Optimization:** Profiled transformer inference on NVIDIA Jetson Orin and optimized selected operators with CUDA and Triton, focusing on memory access and kernel-launch overhead.
- Use this concrete Orin wording instead of the broader Compiler & Kernel Optimization bullet in the current application. The user confirmed the Orin context and approved this wording. It does not establish specific MLIR compiler changes on Orin; do not imply those. Preserve separately verified MLIR experience for relevant roles.

- User label correction for NVIDIA JR2019844 (2026-09-15): Use **GPU Inference Optimization** instead of **On-Device Inference Optimization** for the approved Jetson Orin bullet. Body remains unchanged.

- Latest user-requested wording for NVIDIA JR2019844 (2026-09-15): **Compiler & GPU Inference Optimization:** Profiled transformer inference on NVIDIA Jetson Orin and optimized selected operators using CUDA and the MLIR-based Triton toolchain, focusing on memory access and kernel-launch overhead. This supersedes earlier labels for this bullet. MLIR describes the Triton toolchain; this wording does not claim custom MLIR pass development.

## AMD Application Variants (2026-09-21)

- **GPU Performance Architect (91873):** Prioritized CUDA/Triton kernel development, MLIR-based compiler workflows, NVIDIA Nsight profiling, workload analysis, benchmarking, distributed training, and inference tuning. Omitted unsupported ROCm/HIP, graphics API, RTL simulation, PPA, and AMD profiling-tool claims.
- **AI Research Scientist, Reinforcement Learning (LLM) and Post-Training (91613):** Prioritized distributed SFT/DPO/GRPO post-training, continual world-model pre-training, and reproducible agent evaluation. Omitted unsupported reward-model design, RLHF/RLAIF, new RL-algorithm invention, and top-venue publication claims.
- **GenAI Software Development Engineer (91612):** Prioritized production LangGraph multi-agent orchestration, retrieval-augmented agents, tool use, observability, post-training, serving, and world-model training. Omitted unsupported MCP backend, Neo4j/LightRAG, frontend frameworks, Terraform, and named enterprise API integrations.
- **Sr. Forward Deployed AI Engineer (87745):** Prioritized production multi-agent systems, SFT/DPO/GRPO, reproducible evaluation, RAG, model serving, and benchmark automation. Omitted unsupported direct enterprise-customer ownership and reward-model development.
- **Sr. AI/ML Platform Engineer (87746):** Prioritized distributed training/evaluation, experiment observability, benchmark automation, GPU profiling, and vLLM serving. Omitted unsupported Kubernetes, Ray, Slurm, MLflow, SGLang, shared-cluster scheduling, quota management, ROCm/HIP, and EDA integrations.
- **Senior GPU Inference Performance Engineer (87853):** Prioritized CUDA, NVIDIA Nsight Systems/Compute, TensorRT-LLM, vLLM benchmarking, kernel optimization, and distributed training. Omitted unsupported ROCm tooling, RDMA/RoCE, NCCL/RCCL, Kubernetes GPU scheduling, NUMA, DCGM, and multi-node networking analysis.
- **AI Research Scientist, Hardware AI Systems (87703):** Prioritized world-model training, GUI-agent simulation, long-horizon tool use, distributed post-training, and evaluation. Omitted unsupported EDA/RTL/physical-design experience, meta-learning research, and formal cross-program transfer protocols.
- **AI Research Scientist, Recursive Self Improvement, AI Safety and Reinforcement Learning (87704):** Prioritized controlled post-training, evaluation harnesses, failure-mode analysis, and iterative world-model development. Omitted unsupported formal AI-safety research, red-team protocols, kill-switch governance, scalable oversight, and recursive-self-improvement claims.
- **Software Engineer, GPU/AI/ML (87218):** Prioritized CUDA/Triton kernels, SFT/DPO/GRPO, NVIDIA GPU profiling, distributed PyTorch, inference benchmarking, and serving. Omitted unsupported ROCm/HIP, AMD library codebases, RTL/Verilog, and hardware-software co-design ownership.
- **Sr. Software Development Engineer, GPU Kernel Development (87598):** Prioritized CUDA/Triton kernel development, MLIR-based workflows, PyTorch/TensorFlow, profiling, benchmarking, and distributed training/inference. Omitted unsupported HIP/ASM, ROCm internals, GCN/RDNA, LLVM internals, upstream open-source maintenance, and formal team leadership.

- Persistent platform clarification (2026-09-21): The user has extensive CUDA and NVIDIA-platform experience, but no verified AMD-platform experience. Use CUDA, Triton, TensorRT-LLM, vLLM, and NVIDIA Nsight evidence where transferable; do not claim ROCm, HIP, AMD Instinct, rocProfiler, RCCL, or other AMD-specific hands-on experience without new verification.

- AMD 87704 revision (2026-09-21): Expanded the Volkswagen section with verified Agent Simulation and Production Multi-Agent Systems bullets. Restored the Beyond AI Graph Neural Networks bullet covering GCN, GAT, GraphSAGE, PyTorch Geometric, and water-grid pressure prediction.

- AMD 91613 revision (2026-09-21): Expanded the Volkswagen section with verified Agent Simulation and Production Multi-Agent Systems bullets. Restored the Beyond AI Graph Neural Networks bullet covering GCN, GAT, GraphSAGE, PyTorch Geometric, and water-grid pressure prediction.

## AMD Application Variants (2026-10-26)

- **Triton Compiler and Kernel Software Engineer (92626):** Prioritized CUDA/Triton transformer kernels, the MLIR-based Triton toolchain, attention-kernel prototyping, GPU profiling, distributed PyTorch, and inference benchmarking. Omitted unsupported ROCm/HIP, compiler lowering and code-generation ownership, collective-communication development, upstream contributions, and technical leadership claims.
- **Senior GPU Kernel Development Engineer (93491):** Prioritized architecture-aware CUDA/Triton kernel work, attention optimization, memory and compute profiling, benchmarking, and model serving. Omitted unsupported AMD GPU internals, HIP, LLVM code-generation ownership, and formal team leadership.
- **Software Development Engineer, GPU Fleet Management & AI Infrastructure (92051):** Prioritized distributed training, model serving, high-concurrency benchmarks, regression checks, observability, and production agent orchestration. Omitted unsupported Rust/Go, Kubernetes/Kueue/JobSet/Slurm, PostgreSQL control planes, multi-tenant security, GPU health remediation, and ROCm claims.
- **Senior Compiler Software Development Engineer, AI/ML (89589):** Prioritized MLIR-based compiler workflows, CUDA/Triton operators, workload profiling, microbenchmarks, RL post-training, and distributed execution. Omitted unsupported ROCm/HIP, ONNX Runtime operator maintenance, LLVM transformation ownership, and pre-silicon analysis.
- **Principal GenAI Inference Optimization Engineer (80979):** Prioritized vLLM and TensorRT-LLM profiling, latency/throughput/concurrency benchmarking, prefix caching, quantization, KV-cache optimization, kernel development, model compression, and distributed PyTorch. Omitted unsupported ROCm, SGLang, speculative decoding, multi-node inference networking, and cost-efficiency metrics.
- **Senior AI/ML Solutions Engineer (92716):** Prioritized end-to-end training, SFT/DPO/GRPO fine-tuning, vLLM deployment, benchmarking, RAG, multimodal workflows, and GPU profiling. Omitted unsupported direct customer ownership, partner advocacy, ROCm, JAX, formal MLOps ownership, cloud-native architecture, and reference-design claims.
- **Senior Performance Modeling Engineer (87563):** Prioritized workload characterization, microbenchmarking, NVIDIA Nsight profiling, CUDA/Triton optimization, distributed training, and model compression. Omitted unsupported CPU/GPU microarchitecture modeling, SoC power optimization, data-center architecture work, and the stated minimum years of processor-design experience.
- **AI Engineer, Recursive Self-Improvement for Compute (87873):** Prioritized tool-using multi-agent workflows, evaluation and observability, SFT/DPO/GRPO post-training, GPU kernels, benchmarks, and profiler feedback. Omitted unsupported automated code generation/repair, reward-model design, reward-hacking research, hardware simulation, PPA optimization, and dashboard ownership.
- **HPC & AI Research Engineer / Software Engineer (92045):** Prioritized AI workload profiling, CUDA/Triton optimization, distributed PyTorch, reproducible benchmarks, and production inference. Omitted unsupported x86/EPYC architecture, HPC application and cluster deployment, uProf/Vtune, and named AI coding-tool experience.
- **GPU Runtime and System Software Engineer, Fellow (91572):** Prioritized GPU kernels, runtime profiling, distributed deep learning, model serving, and benchmark automation. Omitted unsupported device-driver and OS-internals work, hyperscaler engagement, architecture strategy, concurrent-programming leadership, patents, standards participation, and Fellow-level leadership claims.
- **Sr. Software Engineer, AI Triton Kernels (86744):** Prioritized Triton/CUDA transformer kernels, FlashAttention-style prototyping, MLIR workflows, end-to-end profiling, vLLM benchmarks, and serving. Omitted unsupported AMD Instinct/ROCm backend work, Gluon/SGLang, LLVM AMDGPU maintenance, named production matmul/MoE kernels, and upstream open-source contributions.
- **Senior AI Software Engineer, Autonomous Systems (92549):** Prioritized Qwen3.5 autonomous-driving scene understanding and ego-trajectory prediction, structured pruning, distributed evaluation, Jetson Orin optimization, GPU profiling, and vLLM serving. Omitted unsupported ROS/ROS2, ROCm, autonomous-navigation software integration, and hard real-time deployment claims.
- **Forward Deployed AI Research Scientist (87744):** Prioritized production multi-agent systems, RAG, agent evaluation, post-training, performance benchmarks, and model serving. Omitted unsupported direct customer and partner ownership, executive-facing strategy, code-generation systems, and human-in-the-loop or LLM-as-judge evaluation claims.
- **ML Systems Research Engineer, RL / Inference / Agent Systems (92704):** Prioritized SFT/DPO/GRPO infrastructure, long-horizon agents, reproducible evaluation, observability, inference benchmarking, serving, and world-model training. Omitted unsupported reward modeling and shaping, uncertainty-aware graders, reward-hacking research, Kubernetes/Ray/Slurm, and compiler/simulator/formal-tool integration.
- **AI Research Scientist, Agentic AI and Foundation Models (93682):** Prioritized continued pre-training on 500,000 trajectories, RL post-training, tool-using agents, evaluation, environment simulation, RAG, and distributed experimentation. Omitted unsupported code-generation and hardware-design agents, synthetic-data generation, inference-time search, formal verification, and top-venue publication claims.
- Refreshed the existing AMD 91873, 87853, 87746, 91613, 87703, 87704, and 87745 applications in their original `9-21-2026` archive folders using the current official postings and the persistent no-ROCm/HIP correction.
- New applications are archived under `applications/AMD/10-26-2026/`. The final working resume remains the last unique posting in the supplied order, **Sr. Forward Deployed AI Engineer (87745)**.
