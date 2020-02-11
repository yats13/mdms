export default ({ app }) => {
  // Get localized path for homepage
  const localePath = app.localePath('index')
  // Get path to switch current route to Russian
  const switchLocalePath = app.switchLocalePath('ru')
}
