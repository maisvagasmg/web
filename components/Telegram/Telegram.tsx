import { Button } from "@chakra-ui/react";
import { TelegramLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

function RotatingButton() {
    const [isMobileView, setIsMobileView] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsMobileView((prevIsMobileView) => !prevIsMobileView);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Button
                onClick={() => window.location.href = "https://t.me/maisvagasmg"}
                width="100%"
                leftIcon={<TelegramLogo weight="fill" />}
                display={{ base: "initial", md: "none" }}
                colorScheme="telegram"
                rounded="none"
                size="sm"
            >
                {isMobileView ? "Clique aqui para entrar no canal do Telegram" : "E receba as vagas em primeira mão"}
            </Button>
        </>
    );
}

export default RotatingButton;