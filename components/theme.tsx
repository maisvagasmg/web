import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    50: "#f1f4ff",
    100: "#8EA2FB",
    200: "#617DF9",
    300: "#3558F8",
    400: "#0934F6",
    500: "#0729C5",
    600: "#051F94",
    700: "#031563",
    800: "#020A31",
    900: "#020A31"
  }
}

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};

export const theme = extendTheme({
  colors,
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "orange.50",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
})