---
applyTo: "**"
---

# GitHub Copilot Instructions

These instructions define how GitHub Copilot should assist with this project. The goal is to ensure consistent, high-quality code generation aligned with our conventions, stack, and best practices.

## General Coding Standards
- Use clear, descriptive variable and function names.
- Follow consistent indentation and formatting.
- Write comments to explain complex logic or decisions.
- Use meaningful commit messages that describe the changes made.
- Ensure code is modular and reusable where possible.
- Avoid hardcoding values; use constants or configuration files instead.
- Write unit tests for new features and bug fixes.
- Use version control effectively, with branches for features and fixes.

## Language and Frameworks
- Use Python 3.x for all new code.
- Follow PEP 8 style guide for Python code.
- Use Django for web applications, adhering to its conventions.
- Use Flask for lightweight web services.
- Use SQLAlchemy for database interactions.
- Use Jinja2 for templating in web applications.
- Use pytest for testing Python code.

## Libraries and Tools
- Use requests for HTTP requests.
- Use pandas for data manipulation and analysis.
- Use NumPy for numerical computations.
- Use Matplotlib or Seaborn for data visualization.
- Use Celery for asynchronous task processing.
- Use Docker for containerization of applications.

## Security and Best Practices
- Validate and sanitize all user inputs to prevent injection attacks.
- Use environment variables for sensitive information (e.g., API keys, database credentials).
- Implement proper error handling and logging.
- Regularly update dependencies to patch security vulnerabilities.

## Documentation
- Write docstrings for all public functions and classes.
- Maintain a README.md file with project overview, setup instructions, and usage examples.
- Use Markdown for documentation files.
- Keep documentation up-to-date with code changes.

## Code Reviews
- All code changes must be reviewed by at least one other developer.
- Provide constructive feedback during code reviews.
- Ensure code adheres to the project's coding standards and best practices.
- Use pull requests for code reviews and discussions.

## Deployment and CI/CD
- Use GitHub Actions for continuous integration and deployment.
- Ensure tests pass before merging code into the main branch.
- Use staging environments for testing before production deployment.
- Document deployment procedures and configurations.

## Performance and Optimization
- Profile code to identify performance bottlenecks.
- Optimize algorithms and data structures for efficiency.
- Use caching strategies where appropriate (e.g., Redis, Memcached).
- Monitor application performance in production and address issues proactively.

## Accessibility and Usability
- Ensure web applications are accessible to users with disabilities (e.g., use ARIA roles, semantic HTML).
- Follow best practices for responsive design to ensure usability across devices.
- Conduct usability testing to gather feedback from users and improve the user experience.

## Collaboration and Communication
- Use GitHub Issues to track bugs, features, and tasks.
- Use project boards to organize work and prioritize tasks.
- Communicate regularly with team members about progress, challenges, and needs.
- Participate in team meetings and discussions to align on goals and strategies.
- Use Slack or similar tools for real-time communication and collaboration.

## Licensing and Contributions
- Use an open-source license (e.g., MIT, Apache 2.0) to clarify usage rights.
- Encourage contributions from the community by providing clear contribution guidelines.
- Acknowledge contributions in the project documentation.
- Respect the intellectual property rights of others; do not copy code without permission.
- Use a Contributor License Agreement (CLA) if necessary to clarify rights and responsibilities.

## Versioning and Releases
- Use semantic versioning (MAJOR.MINOR.PATCH) for releases.
- Document changes in a CHANGELOG.md file.
- Tag releases in the version control system for easy reference.
- Provide release notes summarizing new features, bug fixes, and breaking changes.

## Error Handling and Logging
- Implement structured logging to capture relevant information for debugging.
- Use a centralized logging solution (e.g., ELK stack, Splunk) for better visibility.
- Handle exceptions gracefully and provide meaningful error messages to users.
- Monitor application logs for errors and performance issues.
- Use tools like Sentry or Rollbar for error tracking and reporting.

## Testing and Quality Assurance
- Write unit tests for all new features and critical code paths.
- Use test-driven development (TDD) where appropriate.
- Ensure code coverage is above a certain threshold (e.g., 80%).
- Use continuous integration to run tests automatically on code changes.

