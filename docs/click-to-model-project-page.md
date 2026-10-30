# Click-to-Model project page

Public URL: https://michaelma-177.github.io/click-to-model/

The standalone HTML is copied directly by Jekyll. Project-specific assets live in `assets/click-to-model/`; the existing demonstration video is reused. No al-folio plugin templates or runtime components are overridden.

## Content sources

- The author-provided eight-page paper, `246260-1812.pdf`, is the authoritative source for the title, author affiliations, abstract, method, and results. Its public copy is `assets/click-to-model/click-to-model-paper.pdf`. The paper identifies Yang Cong as corresponding author, with the SCUT affiliation; the website follows the paper rather than the poster's additional affiliation.
- The author's IROS presentation, `IROS-0928-317-1430-IROS2026_CLM_Presentation.pptx`, supplies the original method diagram and selected qualitative images (Cup, Drill, Butter, Tuna). The same pipeline and qualitative examples appear in Figures 2 and 3 of the paper. These are source assets, not generated images.
- `CLM_IROS2026_Landscape_Poster_140x100cm.pdf` supplies the downloadable conference poster and its preview.
- The Oral designation was supplied by the author for the homepage and is preserved here.
- Conference record: https://events.infovaya.com/presentation?id=191885. The endpoint returned HTTP 403 during preparation; content was therefore verified against the locally supplied paper rather than inferred from this record.

## Metrics and citation

- Main comparison reproduces Table II; CLM has 0.95 ADD(-S), 96% click-guided RSR, and 19 FPS. Any6D's 0.96 is the highest ADD(-S) in this table. The blank category-level runtime is displayed as unreported.
- FPS covers 300 online tracking frames after warm-up, excluding initial model reconstruction and scale recovery (Section IV-B).
- The ablation reproduces Table III's decimal RSR values and explicitly describes their fractional form. The source table's heading includes a percent sign despite giving 0–1 values; the website preserves the numeric entries without silently rescaling them.
- BibTeX uses only verified title, authors, venue, and year. No unverified DOI or page numbers are added.
- The project description follows the paper's FoundationPose–ICP design, not later changes in the code repository.

## Template attribution

Adapted from [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), itself based on [Nerfies](https://nerfies.github.io/), under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Attribution is retained in the visible footer. `css/template.css` is the upstream stylesheet; `css/project.css` and `project.js` customize the page for this paper. Changes include real content, responsive examples, accessible tabs, reduced-motion support, and citation copying. Template-derived website design remains under CC BY-SA 4.0; paper and research media retain their original rights.

Bulma 0.9.1 (MIT) is loaded from a pinned jsDelivr URL with a SHA-384 integrity attribute, in accordance with the repository's standalone-library policy. No analytics, external fonts, carousel libraries, or additional build steps are required.
