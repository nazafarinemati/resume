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
   - Consider whether existing bullets should be added, removed, reordered, or rewritten to better reflect the job description.
   - Identify important job-description requirements that are not visible in the resume and discuss whether the user has relevant experience before proposing new bullets.
   - Review the Skills section for role relevance, removing low-signal or less relevant skills while keeping foundational skills that strengthen the application even if not explicitly listed in the job description.
   - Treat removed skills as role-dependent, not permanently deleted; propose bringing back tooling such as DevOps, databases, data libraries, or backend frameworks when a future job description makes them relevant.
   - Review the Education section for both content and visual presentation, including whether older degrees should remain, be compressed, or be removed for the target role.

2. Proposal Phase
   - Present a clear list of proposed changes.
   - Include the section or bullet being modified.
   - Include current text versus proposed text.
   - Include the rationale for each change.
   - Include proposed bullet additions or removals when they would make the resume more targeted, concise, or aligned with the job description.
   - For the latest position, propose placing the strongest and most job-relevant bullet first.
   - Discuss Skills section additions/removals individually when relevance is unclear or when a skill is useful but not explicitly named in the job description.
   - Discuss Education section changes before editing, especially removing or compressing MS/BS entries.

3. Skills and Experience Verification
   - Never assume or add skills that are not already documented or confirmed by the user.
   - If the job description mentions a skill or experience not visible in the resume, ask the user whether they have relevant experience.
   - Discuss potentially relevant experience the user may have but has not yet documented in the resume before omitting an important job-description match.
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
- A compact, role-targeted Skills section that prioritizes the strongest JD-aligned and foundational technical signals.
- Education details that support the application without visually distracting from more relevant experience.

### Avoid
- Editing `Nemati_Resume.tex` before approval.
- Creating new files unless explicitly requested or clearly necessary.
- Fabricating skills, systems, metrics, publications, or production experience.
- Adding irrelevant content that does not support the target role.
- Keyword stuffing.
- Long skills lists that dilute the most relevant signals for the target role.
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
