# Resume Tailoring Instructions

## Purpose

This repository maintains `Nemati_Resume.tex`, a one-page LaTeX resume tailored for individual job applications.

## Autonomous Workflow

- Do not pause for approval, confirmation, preferences, or advice before editing the resume.
- Complete the entire tailoring workflow after the user provides a job posting or asks for a new resume.
- The user will review the completed resume and request changes when desired.
- Make reasonable decisions from the job description, current resume, and bullet bank.
- Never fabricate or inflate experience, skills, metrics, publications, systems, or responsibilities.
- If an important job requirement is unsupported, omit it and mention the omission in the completion summary. Do not add it merely for keyword matching.

## Required Inputs and Sources

For every tailoring pass:

1. Retrieve the complete job posting from the supplied link, prioritizing the employer's official page.
2. Read the entire `resume_bullet_bank.md`.
3. Read the complete current `Nemati_Resume.tex`.
4. Treat the current resume and every relevant bullet-bank entry as candidate content.
5. Compare current and archived variants rather than limiting edits to bullets already in the resume.

The current resume is one role-specific snapshot. It is not the complete record of the user's experience.

## Job Description Files

- Create or replace `job_description.txt` and `job_description.md` for every new application.
- Preserve the company, exact position title, requisition or job ID, locations, work arrangement, department, employment type, posting date, source URL, retrieval date, responsibilities, required qualifications, preferred qualifications, compensation, and other material posting details.
- Keep the text and Markdown versions consistent.
- Do not silently reuse an older description or invent missing posting details.

## Responsibility-Driven Alignment

- Begin with the posting's `You will`, `What you'll be doing`, `What you will do`, or equivalent responsibilities section.
- Identify its most important technical, domain, system, and outcome terms.
- Give these responsibility terms more weight than generic company language and broad qualification lists.
- Use the same terms or close, natural variants in the summary, strongest Experience bullets, bullet labels, and Skills when they truthfully match verified experience.
- Keep wording recognizable enough that a recruiter can connect the resume evidence to the responsibilities.
- Keep bullet labels close to the job's work areas, but do not copy headings mechanically or make every label identical to the posting.
- Avoid keyword stuffing. Each important term should appear where it adds meaning and has supporting evidence.
- Omit responsibility terms that are not supported by the resume or bullet bank.

## Summary

- Use two concise sentences occupying approximately two or three rendered lines.
- Sentence one should identify three or four broad specialization areas.
- Sentence two should summarize three or four general capabilities supported by the selected Experience bullets.
- Align the strongest themes with the responsibilities section.
- Use important role language naturally, without turning the summary into a keyword list.
- Do not include narrow configuration details, hardware SKUs, long technology lists, or unsupported claims.
- Ensure every summary claim maps to a selected Experience bullet or verified skill.

## Experience Selection and Editing

- Compare every role's current bullets with all relevant bullet-bank variants.
- Restore stronger archived bullets when they better match the target responsibilities.
- Add, remove, replace, rewrite, and reorder bullets as needed for the target role.
- Lead the latest position with the strongest and most relevant contribution.
- Prioritize concrete ownership, technical depth, scale, metrics, evaluation, deployment, reliability, and research impact.
- Use direct action verbs such as Developed, Designed, Deployed, Optimized, Integrated, Achieved, Architected, and Engineered.
- Keep strong displaced variants in the bullet bank for future applications.
- Preserve the `AI Researcher` title for Case Western Reserve University.
- Use `Qwen3.5` for the corrected scene-understanding and ego-trajectory depth-pruning bullet. Do not restore the older model name for that specific bullet.
- Describe the verified KV-cache contribution as an adaptive mixed-precision quantization method based on key/value norm imbalance. Do not assign an unsupported method name or publication status.

## Skills

- Fill the Skills section with verified, role-relevant keywords from the job description, especially the responsibilities section.
- Select skills from the verified core and role-dependent pools in `resume_bullet_bank.md`.
- Keep Python and PyTorch unless there is an exceptional reason to omit them.
- Use compact categories that fit the role, such as Programming, Machine Learning, Reinforcement Learning, Perception, Performance Optimization, Agentic AI, or ML Systems.
- Put Model Evaluation under Machine Learning or another evaluation-focused category, not Model Optimization.
- Put LangGraph under Agentic AI when an agent-focused category is used, not under ML Systems.
- Put workload details, model sizes, hardware configurations, and measured outcomes in Experience rather than Skills.
- Replace unrelated skills and categories when stronger verified job keywords exist.

## Education and Structure

Maintain this order:

1. Header
2. Summary
3. Experience
4. Skills
5. Education

- Keep only the PhD entry in Education.
- Do not add a Publications section unless the user explicitly requests one.
- Keep the resume to one page.
- Preserve the established visual style unless a layout adjustment improves readability or page balance.
- Keep the top and bottom whitespace visually balanced and maintain clear spacing between bullets and roles.

## Bullet Bank Maintenance

After every tailoring pass:

- Update `resume_bullet_bank.md` with useful new wording, verified metrics, corrections, skills, role-specific variants, and selection notes.
- Record the company, role, and job ID for the completed variant.
- Preserve distinct strong variants that may fit other roles.
- Update or annotate outdated claims and remove incorrect wording.
- Never let the newest resume overwrite the broader record of verified experience.
- Record persistent user corrections so they carry into future applications.

## Rendering and Verification

1. Compile `Nemati_Resume.tex` with LaTeX.
2. Confirm that compilation succeeds and the resume is exactly one page.
3. Visually inspect the rendered page for clipping, crowding, awkward wrapping, inconsistent spacing, and unbalanced margins.
4. Correct layout problems and render again.
5. Run `./clean_resume.sh` after rendering.
6. Keep the final compiled artifact at `output/pdf/nemati_resume.pdf` using that exact lowercase filename.

## Application Archive

Group completed applications by tailoring/application date inside the existing company directory:

`applications/[Company]/[M-D-YYYY]/[Company]_[JobID]_[PostingM-PostingD]/`

- Use the tailoring/application date for the outer date folder, including the year and omitting leading zeros (for example, `9-15-2026`).
- Place all new application directories completed for that company on that date inside the same date folder.
- Preserve the existing company directory spelling and capitalization, such as `Nvidia`.
- Keep using the job posting date for the inner application directory suffix, omitting the year and leading zeros. Replace spaces and unsupported filename characters with underscores.
- When revising an existing application, update its archive in its original date folder rather than creating a duplicate under the revision date.

Example for an application tailored on September 15, 2026:

`applications/Nvidia/9-15-2026/NVIDIA_JR2019844_9-15/`

Every archive must contain:

- `nemati_resume.pdf`, the verified final PDF
- `Nemati_Resume.tex`, the exact source used for that PDF
- `job_description.txt`, the matching complete text description
- `job_description.md`, the matching renderable Markdown description

For the inner application directory, resolve relative posting dates against the retrieval date: `Posted Today` uses the retrieval month and day, `Posted Yesterday` subtracts one calendar day, and `Posted N Days Ago` subtracts N calendar days.

If the job ID or posting date cannot be recovered, do not invent it. Complete all other work and clearly report which archive metadata remains unavailable.

If two distinct postings share the same company, visible job ID, and posting date, preserve both archives and append a short role qualifier to the newer folder instead of overwriting the existing application.

## Completion Summary

When finished, briefly report:

- The role and company
- The main alignment choices
- Any important unsupported requirements that were omitted
- One-page compilation and visual verification status
- Links to the final PDF, application archive, source, and job description

Do not present a proposal or ask for approval after completing the work.

## Commits

- Commit only when the user explicitly says `commit`.
- Use: `Tailored for [Company] - [Exact Position] - [YYYY-MM-DD]`.
- Use the tailoring or application date in ISO format.
- Derive the company and exact position from the current job description.
