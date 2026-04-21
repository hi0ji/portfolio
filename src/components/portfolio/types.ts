export type PortfolioSectionId =
  | "projects"
  | "experience"
  | "skills"
  | "education"

export type PortfolioCardView = "home" | PortfolioSectionId

export type PortfolioSectionOption = {
  id: PortfolioSectionId
  label: string
}
