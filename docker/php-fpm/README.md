# php-fpm demo fixture

> ⚠️ **Everything in this directory is intentionally insecure and exists only to
> give the Trivy config scan in `.github/workflows/ci.yml` something to report.
> Nothing here is built, deployed, or referenced by the application.**

The CI workflow runs three Trivy scans and prints each as a table in the run
summary:

| # | Scan | Target | What it demonstrates |
|---|------|--------|----------------------|
| 1 | image | the app image built by the `quality` job | vulnerabilities in your own build |
| 2 | config | `docker/php-fpm/` | misconfiguration scanning |
| 3 | image | `nginx:1.29-alpine` | vulnerabilities in a third-party image |

## What actually gets flagged

Scan 2 reports **7 misconfigurations, all from `Dockerfile`** — unpinned
`:latest` tag, `USER root`, `ADD` instead of `COPY`, exposed port 22, and so on.
Each one is annotated inline with the Trivy check ID that catches it.

`www.conf` and `php.ini` are **not** flagged, despite being the most dangerous
files here (`user = root`, `listen = 0.0.0.0:9000`, empty
`security.limit_extensions`, `allow_url_include = On`). Trivy's misconfiguration
engine ships checks for Dockerfile, Kubernetes, Terraform, CloudFormation, Helm,
ARM and Ansible — there is no ruleset for php-fpm or PHP ini files, so these
sail straight through.

That gap is worth internalising: **a clean config scan means "no checks
matched", not "this configuration is safe."** Covering files like these needs
custom Rego checks or a different tool.
