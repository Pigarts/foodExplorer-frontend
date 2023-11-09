import { CardContent, CardBackground, CardImage, TextBox, CardTitle, CardDescription } from "./styles";

export function Card({ imageSrc, title, description }) {
return (
        <CardBackground>
          <CardContent>
          <CardImage src={imageSrc} alt="Card" />
           <TextBox>
           <CardTitle>{title}</CardTitle>
           <CardDescription>{description}</CardDescription>
           </TextBox>
          </CardContent>
        </CardBackground>

)
}