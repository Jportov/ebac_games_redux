import { SectionContainer, TitleSection } from "./styles"

export type Props = {
	title: string
	background?: 'black' | 'gray'
	children?: React.ReactNode

} 






const Section = ({title, background, children}: Props) => (
	<SectionContainer background={background}>
		<div className="container">
		<TitleSection>{title}</TitleSection>
		{children}
		</div>
	</SectionContainer>
)

export default Section