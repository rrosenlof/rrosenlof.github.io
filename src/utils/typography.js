import Typography from "typography"
import doelgerTheme from "typography-theme-doelger"
doelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {
      textShadow: "none",
      backgroundImage: "none",
    }
  })

const typography = new Typography(doelgerTheme)
export const { scale, rhythm, options } = typography
export default typography