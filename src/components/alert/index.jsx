import { Container } from "./styles";
import { useState, useEffect } from "react";

export function Alert({ title, visible = true, colorOption = "defabadult", onClose }) {
    const [showAlert, setShowAlert] = useState(visible);
   
    useEffect(() => {
        if (visible) {
            setShowAlert(true);

            const timeoutId = setTimeout(() => {
                setShowAlert(false);
                if (onClose) {
                    onClose();
                }
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [visible, onClose]);

    return (
        <Container className={showAlert ? "show" : ""} colorOption={colorOption}>
            <span>{title}</span>
        </Container>
    );
}
