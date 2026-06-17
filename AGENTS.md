# Resume Tailoring Instructions for Agents

## Purpose
This repository maintains a LaTeX resume, `Nemati_Resume.tex`, tailored for specific job applications. Each commit should correspond to optimizing the resume for a particular job description.

## Workflow
1. Add or update `job_description.txt` with the target role details.
2. Analyze the resume and job description, then propose changes first.
3. Wait for explicit user approval before editing `Nemati_Resume.tex`.
4. After approval, update `Nemati_Resume.tex` to align with the role.
5. Commit with message format: `Tailored for [Company] - [Position]`.

## Critical Approval Rule
Do not directly edit the resume file without user approval.

Follow this process:

1. Analysis Phase
   - Read `Nemati_Resume.tex`.
   - Read `job_description.txt`.
   - Analyze gaps between the resume and job requirements.

2. Proposal Phase
   - Present a clear list of proposed changes.
   - Include the section or bullet being modified.
   - Include current text versus proposed text.
   - Include the rationale for each change.

3. Skills and Experience Verification
   - Never assume or add skills that are not already documented or confirmed by the user.
   - If the job description mentions a skill or experience not visible in the resume, ask the user whether they have relevant experience.
   - Do not fabricate, inflate, or overstate experience.

4. Approval Phase
   - Wait for explicit confirmation such as "looks good", "go ahead", or "apply these changes".
   - If the user requests revisions, update the proposal and wait again.
   - Only edit the resume after clear approval.

5. Implementation Phase
   - Apply approved changes to `Nemati_Resume.tex`.
   - Keep the resume to one page.
   - Compile or otherwise verify the LaTeX when possible.
   - Summarize the completed changes briefly.

## Tailoring Guidelines

### Include
- Relevant keywords from the job description, integrated naturally.
- Quantifiable outcomes and concrete scale where supported.
- Role-specific skills that directly match requirements.
- Domain-aligned phrasing for the target company or team.
- Technical depth for senior, specialized, AI, ML, or infrastructure roles.
- Impact language focused on scalable systems, production deployment, reliability, evaluation, and cross-functional collaboration.

### Avoid
- Editing `Nemati_Resume.tex` before approval.
- Creating new files unless explicitly requested or clearly necessary.
- Fabricating skills, systems, metrics, publications, or production experience.
- Adding irrelevant content that does not support the target role.
- Keyword stuffing.
- Removing critical details such as education, contact information, or major achievements without approval.

## Technical Mapping
For each role, map:

- Required skills to matching resume bullets and the Skills section.
- Preferred qualifications to relevant achievements or projects.
- Domain knowledge to projects with similar data, users, products, or constraints.
- Soft skills to evidence of collaboration, ownership, communication, or ambiguity handling.

## Resume Structure
Maintain this structure in `Nemati_Resume.tex`:

1. Header: name and contact information.
2. Experience: most recent and relevant positions first, with concise bullets.
3. Skills: grouped by category.
4. Education: PhD, MS, BS.

## Language Guidance
- Use specific action verbs such as Developed, Designed, Deployed, Optimized, Integrated, Achieved, Architected, and Engineered.
- Match job posting terminology when truthful and supported.
- Use concrete scale such as records processed, model size, latency, throughput, accuracy, memory savings, or deployment constraints.
- Prioritize outcomes over tasks.

## Commit Standards
- Format: `Tailored for [Company] - [Position]`.
- Example: `Tailored for Apple - ML Research Engineer`.
- Keep `job_description.txt` in sync with the target application.
- Use commit messages that make it easy to track which resume version belongs to which role.

## Quality Checklist
- User approved all resume edits before implementation.
- All added skills and experiences are verified.
- Required skills from the job description are addressed where truthfully supported.
- Keywords are naturally integrated.
- Metrics are included where available.
- Resume remains one page.
- LaTeX compiles without errors when verification is possible.
- Contact information is current.
- The most relevant experience is emphasized.
