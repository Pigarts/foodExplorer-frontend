
import { Container, Box, Content, FadeIn, FadeOut } from "./styles"
import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Icon_Left_Arrow, Icon_Right_Arrow } from "../Icons"

export function Section({ title, children }) {
    const contentRef = useRef(null);
   
    function scrollRight()  {
        if (contentRef.current) {
            contentRef.current.scrollLeft += 200;
        }
      };
    
    function scrollLeft()  {
        if (contentRef.current) {
            contentRef.current.scrollLeft -= 200;
      }
    };
    
    return (
        <Container>
            <span>{title}</span>
            <Box>
                <Content ref={contentRef}>
                <FadeIn >
                    <IconButton onClick={scrollLeft} icon={Icon_Left_Arrow}/>
                </FadeIn>  
                    {children}<FadeOut >
                    <IconButton onClick={scrollRight} icon={Icon_Right_Arrow}/>
                </FadeOut>
                
                </Content>
            </Box>
        </Container>
    )
}