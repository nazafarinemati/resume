# Resume Tailoring Instructions for GitHub Copilot

## Purpose
This repository maintains a LaTeX resume (`Nemati_Resume.tex`) that is tailored for specific job applications. Each commit should correspond to optimizing the resume for a particular job description.

## Workflow
1. Add or update `job_description.txt` with the target role details
2. **ANALYZE and PROPOSE changes first** - do not make edits directly
3. Wait for user approval before applying any changes
4. Update `Nemati_Resume.tex` to align with the job requirements after approval
5. Commit with message format: `"Tailored for [Company] - [Position]"`

## IMPORTANT: Review and Approval Process

### ⚠️ CRITICAL: Always Get Approval Before Making Changes

**DO NOT directly edit the resume file without user approval.** Follow this process:

1. **Analysis Phase**:
   - Read the current `Nemati_Resume.tex` file
   - Read the `job_description.txt` file
   - Analyze gaps between the resume and job requirements

2. **Proposal Phase**:
   - Present a clear list of proposed changes with:
     - Which section/bullet will be modified
     - Current text vs. proposed new text
     - Rationale for each change (how it aligns with JD requirements)
   - Format proposals in a readable way using markdown tables or bullet lists
   
3. **Skills and Experience Verification**:
   - **If you identify skills or experiences mentioned in the job description that may not be present in the current resume**, explicitly ask the user:
     - "I notice the JD mentions [skill/experience X]. Do you have experience with this that we should add?"
     - "The role requires [Y]. I don't see this in your current resume - do you have relevant experience here?"
   - **NEVER assume or add skills/experiences that aren't already documented**
   - **NEVER fabricate or embellish** - only work with what the user confirms

4. **Approval Phase**:
   - Wait for explicit user confirmation (e.g., "looks good", "go ahead", "apply these changes")
   - If user requests modifications to the proposal, revise and present again
   - Only proceed to making actual file edits after receiving clear approval

5. **Implementation Phase**:
   - After approval, apply the changes to the resume
   - Confirm completion with a brief summary

### Example Interaction Flow

**❌ WRONG (Don't do this):**
```
"I've tailored your resume for the Apple position by updating..."
[Makes changes immediately]
```

**✅ CORRECT (Do this):**
```
"I've analyzed the Apple ML Research Engineer position. Here are my proposed changes:

**Proposed Changes:**

1. **Volkswagen AI Engineer (Bullet 1)**
   - Current: "Designing and deploying multi-agent systems for HMI..."
   - Proposed: "Designing and deploying multi-agent systems with LLM-based reasoning..."
   - Reason: JD emphasizes "LLM-based reasoning and planning"

2. **Skills Section**
   - Current: Lists "Vision Transformers, LLM/VLM fine-tuning"
   - Proposed: Move "Agent-based Systems" to first position
   - Reason: Primary requirement for this role

**Questions:**
- The JD mentions "agentic RAG systems" - do you have experience with RAG that we should highlight?
- They want "simulation frameworks" - is the work you did at VW related to simulation?

Please review and let me know if you'd like me to proceed or make any adjustments."
```

## Resume Tailoring Guidelines

### What to Include
When tailoring the resume, ensure it includes:

- **Relevant Keywords**: Extract key technical terms, frameworks, and methodologies from the job description and naturally incorporate them into relevant experience bullets
- **Quantifiable Achievements**: Use metrics and concrete outcomes (e.g., "X% improvement", "reduced latency by Y", "processed Z records")
- **Role-Specific Skills**: Prioritize skills and experiences that directly match the job requirements
- **Domain Alignment**: Emphasize projects and work that align with the target company's industry and products
- **Technical Depth**: For senior/specialized roles, showcase deep expertise in required technologies
- **Impact Focus**: Highlight contributions to scalable systems, production deployments, and cross-functional collaboration

### What to Avoid
- **Do NOT make changes without user approval** - always propose changes first and wait for confirmation
- **Do NOT create new files** unless absolutely necessary (e.g., cover letter explicitly requested)
- **Do NOT fabricate experiences** or skills - only emphasize and reframe existing work
- **Do NOT assume the user has skills not already in the resume** - always ask for confirmation first
- **Do NOT exceed one page** for the resume (maintain concise, impactful bullets)
- **Do NOT remove critical information** like education, contact details, or major achievements
- **Do NOT use generic descriptions** - be specific about technologies, scale, and outcomes
- **Do NOT include irrelevant details** that don't support the target role

### Technical Requirements Mapping
For each job description, identify and map:
1. **Required technical skills** → Highlight matching skills in the Skills section and experience bullets
2. **Preferred qualifications** → Emphasize where you exceed minimum requirements
3. **Domain knowledge** → Reframe projects to show relevant domain expertise
4. **Soft skills/attributes** → Incorporate language that demonstrates these (e.g., "fast-paced", "collaborative", "scalable")

### Content Structure
Maintain this structure in `Nemati_Resume.tex`:
1. **Header**: Name and contact information
2. **Experience**: Most recent and relevant positions first, with 3-5 bullets each
3. **Skills**: Organized by category (Programming, ML, Frameworks, DevOps)
4. **Education**: PhD first, then MS, then BS

### Language Optimization
- Use action verbs: Developed, Designed, Deployed, Optimized, Integrated, Achieved
- Match job posting terminology (e.g., if they say "agent-based systems", use that exact term)
- Be specific about scale and scope: "multi-million records", "production-grade", "distributed systems"
- Emphasize outcomes over tasks: "Improved X by Y%" vs "Worked on X"

### Examples of Good Tailoring

**Generic bullet:**
> "Built machine learning models for prediction tasks"

**Tailored for LLM/Agent role:**
> "Developed agent-based reasoning systems using LLMs with evaluation frameworks for multi-turn dialogue, achieving 15% improvement in task completion accuracy"

**Generic bullet:**
> "Worked on model optimization"

**Tailored for ML Infrastructure role:**
> "Optimized inference latency by 40% through quantization and deployment with vLLM, profiling GPU bottlenecks using NVIDIA Nsight Systems"

## Commit Standards
- **Format**: `Tailored for [Company] - [Position]`
- **Example**: `Tailored for Apple - ML Research Engineer (Siri)`
- Keep job_description.txt in sync with each resume version
- Use descriptive commit messages that make it easy to track which version goes with which application

## Quality Checklist
Before finalizing each tailored resume:
- [ ] User has reviewed and approved all proposed changes
- [ ] All skills and experiences mentioned are verified by the user
- [ ] All required skills from JD are addressed
- [ ] Keywords naturally integrated (not keyword-stuffed)
- [ ] Quantifiable metrics included where possible
- [ ] No spelling or grammar errors
- [ ] LaTeX compiles without errors
- [ ] Resume fits on one page
- [ ] Contact information is current
- [ ] Most relevant experience is emphasized
- [ ] Skills section reflects JD priorities
