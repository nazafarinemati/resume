# Resume Bullet Bank

Use this file as the source of reusable, verified resume bullets. When tailoring
`Nemati_Resume.tex`, review this bank before adding or removing bullets. When a
bullet is removed from the resume, keep it here with enough context to bring it
back for a future role.

## Active Bullets

### Volkswagen Group of America - Senior AI Engineer

- Post-trained multimodal foundation models with SFT, DPO, and GRPO for specialized reasoner, grounder, verifier, and error-recovery components in real-device automotive workflows.
- Designed a long-horizon task planner that decomposed natural-language automotive human-machine interface (HMI) goals into executable steps and dynamically replanned from action feedback across multi-step device workflows.
- Built multimodal-agent evaluation infrastructure to benchmark task completion, integrating reasoning voice agents to accept user voice input and test in-vehicle HMI voice capabilities.
- Deployed and evaluated Qwen3.5 models on Azure ML managed endpoints with vLLM, configuring prefix caching, long-context inference, and throughput/latency monitoring.
- Compressed Qwen2.5-VL for autonomous-driving trajectory prediction from 3.75B to 1.4B using structured pruning, knowledge distillation from a 7B teacher, and quantization-aware training to reduce inference latency while maintaining accuracy under edge constraints.

### Case Western Reserve University - Artificial Intelligence Research Assistant

- Developed LIT-LVM, a latent-variable method for structured interaction modeling that outperformed elastic net, hierarchical lasso, and factorization-machine baselines across simulated and real-world datasets. Published in Transactions on Machine Learning Research (2025).
- Analyzed KV-cache key/value norm imbalance to optimize LLM inference memory, achieving 2x memory reduction with >94% accuracy retention across foundation models up to 70B parameters.
- Developed DEASurv, a multimodal predictive model combining entity-specific embeddings, attention, and contrastive learning for large-scale medical datasets.

### Sherwin-Williams - Software Engineer, AI/ML Intern

- Designed and deployed real-time vision-transformer inference pipeline for SAM, tuning latency and improving segmentation quality by 7% IoU through inference evaluation and pipeline optimization.
- Built a VLM-based grounded-perception system integrating LLaVA and vision transformers for natural-language object grounding and segmentation.

### Beyond Limits AI - Data Science Research Intern

- Developed and deployed Graph Neural Network models (GCN, GAT, GraphSAGE) using PyTorch Geometric for graph-structured data, achieving 10% accuracy improvement over baseline approaches.
- Fine-tuned Llama-2 using PyTorch FSDP/DDP for scalable multi-GPU training and quantized deployment.

## Archived / Role-Specific Bullets

### Prior Volkswagen Resume Wording

- Post-trained multimodal foundation models with SFT, DPO, and GRPO for specialized planner, reasoner, grounder, verifier, and error-recovery components in real-device automotive workflows.
- Built multimodal-agent evaluation infrastructure capturing screenshots, model outputs, latency, execution plans, and step histories to diagnose failure modes and benchmark task-completion success.
- Post-trained multimodal foundation models with SFT, DPO, and GRPO to improve planning, reasoning, grounded perception, tool execution, verification, and error recovery for long-horizon agentic workflows on real automotive devices.
- Designed long-horizon planning for a multimodal multi-agent system that decomposed natural-language HMI goals, coordinated grounding and tool-use components, and used a diffusion-based world model to predict future states and dynamically replan from verification feedback.
- Built a multimodal GUI-agent system for real-device Android HMI workflows, integrating visual screen understanding, element grounding, ADB tool execution, action verification, and error recovery across in-vehicle applications.
- Built multimodal-agent evaluation infrastructure capturing screenshots, model outputs, latency, execution plans, and step histories to diagnose failure modes and benchmark long-horizon task-completion success on real devices.
- Deployed and profiled Qwen3.5 models up to 35B/A3B on H100/A100 Azure ML endpoints with TensorRT-LLM and NVIDIA Nsight Systems/Compute, tuning throughput, latency, caching, and long-context inference.
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

- Developed LIT-LVM using latent variable embeddings, structured regularization, and GNN-based higher-order interactions, outperforming GNN, Factorization Machine, and elastic net baselines in ranking and recommendation tasks.
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
- Deployed and evaluated Qwen3.5 models up to 35B/A3B on Azure ML managed endpoints with vLLM, configuring H100/A100 serving, prefix caching, long-context inference, health probes, and throughput/latency monitoring.
- Deployed and profiled Qwen3.5 models up to 35B/A3B with TensorRT-LLM on H100/A100 Azure ML endpoints, using NVIDIA Nsight Systems/Compute to diagnose memory versus compute bottlenecks and tune throughput/latency.
- Architected multimodal inference and evaluation infrastructure for automotive AI workflows, measuring latency, throughput, task accuracy, and serving reliability for large VLM deployment with vLLM.
- Applied pruning, knowledge distillation, and quantization-aware training to compress VLMs for constrained deployment, then served custom checkpoints with vLLM continuous batching to improve throughput and latency for GUI-agent inference.
- Compressed VLMs using pruning, knowledge distillation, and quantization-aware training, then served custom checkpoints with vLLM continuous batching and optimized attention backends to improve GUI-agent inference throughput and latency.

### Pruning / Compression

- Implemented depth-pruning for Qwen2.5-VL by constructing 8L, 6L, and 4L student variants, mapping selected teacher layers and preserving compatible vision-language weights for constrained deployment.
- Optimized Qwen2.5-VL for autonomous-driving trajectory prediction, reducing parameters from 3.75B to 1.4B through pruning for deployment under edge compute and memory constraints.
- Distilled knowledge from Qwen2.5-VL 7B into the pruned 1.4B trajectory-prediction model, applying quantization-aware training to preserve VLM performance under constrained deployment settings.

### GPU Performance / Inference Optimization

- Prototyped CUDA kernels for FlashAttention-style transformer attention, exploring memory access patterns, tiling strategies, and GPU parallelism for low-latency inference workloads.
- Optimized Qwen2.5-VL for constrained automotive inference by depth-pruning 8L, 6L, and 4L student variants, reducing GPU memory footprint while preserving compatible vision-language weights.
- Compressed Qwen2.5-VL 7B into a pruned 1.4B trajectory-prediction model using knowledge distillation and quantization-aware training for lower-memory, deployment-ready inference.
- Built distributed PyTorch/DDP pipelines for multi-task automotive VLM workloads, supporting scalable training, task-specific evaluation, and performance validation across transformer-based models.
- Profiled and optimized TensorRT-LLM serving for Qwen3.5 models up to 35B/A3B on H100/A100 GPUs, using NVIDIA Nsight Systems/Compute to diagnose memory-vs-compute bottlenecks and tune throughput/latency.
- Served custom VLM checkpoints with vLLM continuous batching and optimized attention backends, applying CUDA/FlashAttention systems knowledge to improve throughput and latency for GUI-agent inference.

### Earlier Experience

- Developed large-scale ML pipelines over 500,000+ records in PyTorch for preprocessing, distributed data handling, model development, and evaluation.

## Skills Bank

### Currently Active

- Foundation Models / Multimodal: Transformers, Vision-Language Models, Multimodal Learning, Visual Grounding
- Agentic AI: Long-Horizon Planning, Voice Agents, Tool Use, GUI Agents, Multi-Agent Workflows
- Training / Evaluation: SFT, DPO, GRPO, Reinforcement Learning, PyTorch, Distributed Training (FSDP/DDP), Model and Agent Evaluation, Knowledge Distillation, Quantization, Pruning
- Programming / Infrastructure: Python, C++, CUDA, vLLM, Docker, Git

### Role-Dependent / Bring Back When Relevant

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
