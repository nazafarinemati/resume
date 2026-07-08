# Resume Bullet Bank

Use this file as the source of reusable, verified resume bullets. When tailoring
`Nemati_Resume.tex`, review this bank before adding or removing bullets. When a
bullet is removed from the resume, keep it here with enough context to bring it
back for a future role.

## Active Bullets

### Volkswagen Group of America - Senior AI Engineer

- Optimized Qwen2.5-VL for autonomous-driving trajectory prediction, reducing parameters from 3.75B to 1.4B through depth pruning for deployment under edge compute and memory constraints.
- Distilled knowledge from Qwen2.5-VL 7B into the pruned 1.4B trajectory-prediction model, applying quantization-aware training to preserve VLM performance under constrained deployment settings.
- Built distributed PyTorch/DDP pipelines for multi-task automotive VLM workloads, supporting scalable training, task-specific evaluation, and performance validation across transformer-based models.
- Post-trained multimodal foundation models using SFT, DPO, and GRPO for reasoning, grounding, and task execution in automotive AI workflows.
- Developed multimodal inference and evaluation infrastructure for automotive AI workflows, measuring latency, throughput, task accuracy, and serving reliability across large VLM experiments.

### Case Western Reserve University - Artificial Intelligence Research Assistant

- Optimized LLM inference memory by analyzing KV-cache key/value norm imbalance, achieving 2x memory reduction with >94% accuracy retention across models up to 70B parameters.
- Developed LIT-LVM using latent variable embeddings, structured regularization, and GNN-based higher-order interactions, outperforming GNN, Factorization Machine, and elastic net baselines in ranking and recommendation tasks.
- Developed DEASurv, a deep multimodal model leveraging entity-specific embeddings, attention mechanisms, and contrastive loss to improve prediction on large-scale medical datasets.

### Sherwin-Williams - Software Engineer, AI/ML Intern

- Designed and deployed real-time vision-transformer inference pipeline for SAM, tuning latency and improving segmentation quality by 7% IoU through inference evaluation and pipeline optimization.
- Built VLM-based visual grounding system integrating LLaVA with vision transformers, implementing cross-modal alignment for natural-language object grounding and segmentation.

### Beyond Limits AI - Data Science Research Intern

- Developed and deployed Graph Neural Network models (GCN, GAT, GraphSAGE) using PyTorch Geometric for graph-structured data, achieving 10% accuracy improvement over baseline approaches.
- Fine-tuned Llama-2 using PyTorch distributed training with FSDP/DDP for multi-GPU optimization and quantization for efficient deployment.

## Archived / Role-Specific Bullets

### Foundation Model / Applied Research

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

### Deployment / Serving

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

- VLA / Automotive AI: Vision-Language-Action Models, Trajectory Prediction, Autonomous-Driving VLMs, Multimodal Reasoning, Visual Grounding
- ML Engineering: Python, PyTorch, Distributed Training (FSDP/DDP), Fine-tuning, Post-training, Reinforcement Learning, Model Evaluation
- Optimization / Deployment: Pruning, Knowledge Distillation, Quantization-Aware Training, vLLM, CUDA, Model Serving, Latency/Throughput Tuning
- Computer Vision: Vision Transformers, Segmentation, Cross-Modal Alignment, Object Grounding, Graph Neural Networks

### Role-Dependent / Bring Back When Relevant

- ADB
- SSH
- Docker
- Flask
- Redis
- Git
- LangChain
- LangGraph
- PyTorch Geometric
- NumPy
- Pandas
- Agentic RAG
- Reinforcement Learning
- Embeddings
- Graph Neural Networks
- NVIDIA Nsight Systems/Compute
- TensorRT-LLM
- C++
- SQL
- Prompting
- Multi-Agent Workflows
- Dynamic Planning
- UI Grounding
