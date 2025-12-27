# Setting Up Branch Protection Rules

To ensure tests run before merging, you need to configure branch protection rules on GitHub.

## Steps:

1. **Go to your repository on GitHub**:
   https://github.com/Dume01/Splitwise-clone

2. **Navigate to Settings**:
   - Click on **Settings** tab
   - Click on **Branches** in the left sidebar

3. **Add Branch Protection Rule**:
   - Click **Add rule** or **Add branch protection rule**
   - Branch name pattern: `master` (or `main` if that's your default branch)

4. **Configure Protection Settings**:
   
   ✅ **Require a pull request before merging**
   - Check this box
   - Optional: Require approvals (set to 1 if working with a team)
   
   ✅ **Require status checks to pass before merging**
   - Check this box
   - Search for and select: `test (18.x)` and `test (20.x)`
   - These are the jobs from your CI workflow
   
   ✅ **Require branches to be up to date before merging**
   - Check this box (recommended)
   
   ✅ **Do not allow bypassing the above settings**
   - Check this if you want to enforce it even for admins

5. **Save changes**:
   - Click **Create** or **Save changes**

## What This Does:

- **Prevents direct pushes** to master/main branch
- **Requires pull requests** for all changes
- **Runs CI tests** automatically on every PR
- **Blocks merging** if tests fail
- **Ensures code quality** before merging

## Workflow:

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make changes and commit
3. Push to GitHub: `git push origin feature/my-feature`
4. Create a Pull Request on GitHub
5. CI tests run automatically
6. If tests pass ✅, you can merge
7. If tests fail ❌, fix issues and push again

## Note:

After the first push with the CI workflow, GitHub will recognize the status checks. You may need to push once before you can select them in the branch protection settings.
