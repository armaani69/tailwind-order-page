module.exports = {
  content: ['./order_page_tailwind/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        Modal_bg: '#1f1f1f;',
        Tile_bg: '#262626',
        Button_blue: '#33A6DF',
        Border_grey: '#262626',
      },
      width: {
        ModalWidth: '27em',
        TileWidth: '58px',
        HeadPhonesTileWidth: '121px',
        LeftArrowWidth: '13px',
        NumericalButtonWidth: '23px',
      },
      height: {
        TileHeight: '58px',
        HeadPhonesTileHeight: '111px',
        LeftArrowHeight: '20px',
        NumericalButtonHeight: '20px',
      },
      boxShadow: {
        ModalShadow: '4px 4px 12px rgba(0, 0, 0, 0.301983)',
      },
    },
  },
  plugins: [],
};
