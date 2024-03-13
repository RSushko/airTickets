export const ArrowRightIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
      />
    </svg>
  );
};

export const CheckMarkIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.57143 6H7M7 6L1 0.5M7 6L1 11.5"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BurgerOpenIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 15 15">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const BurgerCloseIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </svg>
  );
};

export const ArrowTopIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.16408 10.8953L4.74612 10.8953C4.83596 10.8953 4.9219 10.8563 4.98244 10.788L9.25783 5.86792L9.25784 16.849C9.25784 16.9348 9.32815 17.005 9.41409 17.005L10.586 17.005C10.6719 17.005 10.7422 16.9348 10.7422 16.849L10.7422 5.86792L15.0176 10.788C15.0762 10.8563 15.1621 10.8953 15.2539 10.8953L16.836 10.8953C16.9688 10.8953 17.041 10.7373 16.9531 10.6379L10.4707 3.17871C10.4121 3.11122 10.3397 3.05708 10.2583 3.01998C10.1769 2.98289 10.0885 2.96369 9.99905 2.96369C9.90958 2.96369 9.82117 2.98289 9.73979 3.01998C9.65841 3.05708 9.58596 3.11122 9.52736 3.17871L3.0469 10.6379C2.95901 10.7393 3.03127 10.8953 3.16408 10.8953Z"
        fill="white"
      />
    </svg>
  );
};

export const AppleStoreIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 800 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M794.905 209.562C794.905 212.546 794.316 215.501 793.173 218.257C792.03 221.014 790.355 223.518 788.243 225.627C786.131 227.736 783.625 229.409 780.866 230.548C778.107 231.688 775.151 232.273 772.166 232.27H28.0463C22.0152 232.276 16.2285 229.888 11.9588 225.629C7.68917 221.371 5.28618 215.591 5.27832 209.562V28.468C5.28618 22.4357 7.68822 16.6531 11.957 12.3899C16.2258 8.12668 22.0125 5.7313 28.0463 5.72974H772.16C775.147 5.72974 778.104 6.31792 780.863 7.4607C783.622 8.60347 786.129 10.2785 788.241 12.39C790.352 14.5015 792.027 17.0082 793.169 19.7669C794.312 22.5256 794.899 25.4822 794.899 28.468L794.905 209.562Z"
        fill="white"
      />
      <path
        d="M772.166 237.553H28.0463C20.6167 237.552 13.4911 234.603 8.23306 229.356C2.97506 224.108 0.0141366 216.989 0 209.562L0 28.474C0.0109911 21.0426 2.96996 13.919 8.22779 8.66592C13.4856 3.41282 20.613 0.459153 28.0463 0.452881L772.16 0.452881C779.593 0.462283 786.718 3.41695 791.975 8.66938C797.233 13.9218 800.192 21.0436 800.207 28.474V209.562C800.218 225.001 787.616 237.553 772.166 237.553Z"
        fill="#A6A6A6"
      />
      <path
        d="M794.905 209.562C794.905 212.546 794.316 215.501 793.173 218.257C792.03 221.014 790.355 223.518 788.243 225.627C786.131 227.736 783.625 229.409 780.866 230.548C778.107 231.688 775.151 232.273 772.166 232.27H28.0463C22.0152 232.276 16.2285 229.888 11.9588 225.629C7.68917 221.371 5.28618 215.591 5.27832 209.562V28.468C5.28618 22.4357 7.68822 16.6531 11.957 12.3899C16.2258 8.12668 22.0125 5.7313 28.0463 5.72974H772.16C775.147 5.72974 778.104 6.31792 780.863 7.4607C783.622 8.60347 786.129 10.2785 788.241 12.39C790.352 14.5015 792.027 17.0082 793.169 19.7669C794.312 22.5256 794.899 25.4822 794.899 28.468L794.905 209.562Z"
        fill="black"
      />
      <path
        d="M178.68 117.755C178.508 98.6454 194.331 89.3486 195.055 88.9157C186.094 75.8538 172.204 74.0692 167.323 73.9269C155.657 72.6995 144.342 80.9055 138.399 80.9055C132.338 80.9055 123.187 74.0455 113.324 74.247C100.632 74.4427 88.7589 81.7889 82.247 93.1966C68.808 116.457 78.8309 150.638 91.7065 169.439C98.1472 178.653 105.673 188.928 115.524 188.567C125.162 188.175 128.762 182.43 140.392 182.43C151.915 182.43 155.296 188.567 165.342 188.335C175.685 188.175 182.197 179.086 188.413 169.795C195.856 159.247 198.845 148.847 198.963 148.314C198.726 148.231 178.882 140.653 178.68 117.755ZM159.702 61.5587C164.885 55.0781 168.432 46.2615 167.448 37.3145C159.945 37.6465 150.563 42.5024 145.16 48.8407C140.38 54.4259 136.11 63.5805 137.213 72.1896C145.64 72.8181 154.293 67.9384 159.702 61.5587Z"
        fill="white"
      />
      <path
        d="M772.166 0.452881H373.593L529.707 237.553H772.166C779.597 237.547 786.723 234.595 791.981 229.344C797.238 224.094 800.198 216.973 800.213 209.544V28.474C800.2 21.0431 797.24 13.9204 791.983 8.66765C786.725 3.41488 779.599 0.460719 772.166 0.452881Z"
        fill="url(#paint0_linear_614_63)"
      />
      <path
        d="M318.271 187.244H304.803L297.425 164.067H271.781L264.753 187.244H251.64L277.053 108.339H292.746L318.271 187.244ZM295.201 154.344L288.529 133.74C287.823 131.635 286.495 126.678 284.549 118.875H284.312C283.529 122.231 282.278 127.188 280.564 133.74L274.005 154.344H295.201ZM383.497 158.097C383.497 167.773 380.87 175.422 375.609 181.037C370.9 186.035 365.047 188.531 358.066 188.531C350.529 188.531 345.108 185.845 341.816 180.461V210.315H329.172V149.049C329.172 142.972 329.012 136.74 328.704 130.348H339.824L340.529 139.367H340.767C344.983 132.572 351.383 129.174 359.97 129.174C366.684 129.174 372.288 131.825 376.772 137.131C381.25 142.45 383.497 149.434 383.497 158.097ZM370.616 158.559C370.616 153.021 369.37 148.456 366.868 144.857C364.134 141.116 360.462 139.242 355.86 139.242C352.741 139.242 349.906 140.286 347.373 142.343C344.835 144.418 343.174 147.128 342.398 150.484C342.051 151.739 341.854 153.03 341.81 154.332V163.824C341.81 167.957 343.08 171.449 345.618 174.307C348.156 177.153 351.454 178.582 355.51 178.582C360.273 178.582 363.979 176.738 366.63 173.08C369.287 169.41 370.616 164.571 370.616 158.559ZM448.955 158.097C448.955 167.773 446.327 175.422 441.067 181.037C436.352 186.035 430.504 188.531 423.518 188.531C415.98 188.531 410.559 185.845 407.268 180.461V210.315H394.623V149.049C394.623 142.972 394.463 136.74 394.155 130.348H405.275L405.981 139.367H406.218C410.429 132.572 416.828 129.174 425.421 129.174C432.129 129.174 437.734 131.825 442.229 137.131C446.701 142.45 448.955 149.434 448.955 158.097ZM436.067 158.559C436.067 153.021 434.816 148.456 432.313 144.857C429.579 141.116 425.92 139.242 421.317 139.242C418.198 139.242 415.363 140.286 412.819 142.343C410.28 144.418 408.626 147.128 407.849 150.484C407.463 152.049 407.256 153.324 407.256 154.332V163.824C407.256 167.957 408.531 171.449 411.057 174.307C413.596 177.147 416.893 178.582 420.962 178.582C425.73 178.582 429.437 176.738 432.082 173.08C434.739 169.41 436.067 164.571 436.067 158.559ZM522.139 165.111C522.139 171.829 519.791 177.289 515.123 181.505C509.987 186.106 502.817 188.412 493.625 188.412C485.132 188.412 478.323 186.776 473.187 183.497L476.111 172.961C481.656 176.246 487.747 177.882 494.378 177.882C499.146 177.882 502.853 176.803 505.498 174.663C508.149 172.516 509.489 169.647 509.489 166.065C509.489 162.858 508.38 160.172 506.204 157.984C504.015 155.802 500.397 153.768 495.315 151.901C481.496 146.748 474.581 139.212 474.581 129.299C474.581 122.824 477.025 117.524 481.9 113.379C486.775 109.241 493.239 107.171 501.281 107.171C508.463 107.171 514.447 108.422 519.198 110.919L516.025 121.223C511.553 118.804 506.506 117.595 500.86 117.595C496.4 117.595 492.901 118.692 490.398 120.874C488.293 122.824 487.225 125.202 487.225 128.024C487.225 131.137 488.441 133.722 490.861 135.75C492.96 137.617 496.792 139.651 502.331 141.833C509.127 144.572 514.121 147.762 517.318 151.426C520.538 155.091 522.139 159.662 522.139 165.111ZM564.052 139.835H550.115V167.459C550.115 174.485 552.57 177.989 557.492 177.989C559.752 177.989 561.626 177.799 563.109 177.402L563.459 187.001C560.968 187.932 557.688 188.401 553.626 188.401C548.632 188.401 544.73 186.877 541.912 183.829C539.107 180.782 537.696 175.677 537.696 168.491V139.811H529.393V130.325H537.696V119.907L550.115 116.16V130.325H564.052V139.835ZM626.811 158.328C626.811 167.073 624.308 174.254 619.314 179.869C614.089 185.649 607.138 188.531 598.474 188.531C590.111 188.531 583.463 185.762 578.505 180.23C573.547 174.686 571.068 167.702 571.068 159.277C571.068 150.46 573.63 143.238 578.736 137.623C583.854 132.003 590.746 129.192 599.411 129.192C607.761 129.192 614.469 131.967 619.545 137.505C624.397 142.877 626.811 149.814 626.811 158.328ZM613.704 158.619C613.704 153.407 612.577 148.936 610.317 145.195C607.666 140.677 603.871 138.418 598.954 138.418C593.889 138.418 590.005 140.677 587.359 145.195C585.094 148.936 583.967 153.484 583.967 158.856C583.967 164.073 585.094 168.556 587.359 172.285C590.094 176.803 593.907 179.062 598.847 179.062C603.681 179.062 607.47 176.756 610.21 172.173C612.535 168.342 613.704 163.842 613.704 158.619ZM667.928 141.466C666.613 141.228 665.279 141.111 663.943 141.116C659.495 141.116 656.055 142.788 653.635 146.155C651.536 149.12 650.48 152.867 650.48 157.391V187.244H637.836V148.266C637.847 142.294 637.724 136.321 637.468 130.354H648.481L648.944 141.24H649.294C650.634 137.499 652.734 134.481 655.616 132.222C658.254 130.248 661.46 129.179 664.755 129.174C665.924 129.174 666.979 129.257 667.916 129.406L667.928 141.466ZM724.477 156.105C724.509 158.026 724.355 159.946 724.015 161.838H686.082C686.224 167.459 688.063 171.763 691.586 174.728C694.782 177.372 698.916 178.7 703.993 178.7C709.609 178.7 714.733 177.811 719.341 176.015L721.322 184.784C715.937 187.132 709.579 188.3 702.243 188.3C693.418 188.3 686.491 185.703 681.45 180.521C676.421 175.333 673.9 168.36 673.9 159.626C673.9 151.053 676.243 143.908 680.934 138.21C685.845 132.127 692.481 129.085 700.832 129.085C709.034 129.085 715.243 132.127 719.46 138.21C722.799 143.031 724.477 149.007 724.477 156.105ZM712.42 152.826C712.509 149.073 711.679 145.841 709.965 143.108C707.777 139.586 704.408 137.831 699.895 137.831C695.761 137.831 692.392 139.544 689.83 142.983C687.725 145.717 686.473 149.001 686.088 152.814L712.42 152.826Z"
        fill="white"
      />
      <path
        d="M268.133 80.443C264.616 80.443 261.574 80.271 259.042 79.9805V41.8325C262.583 41.2855 266.163 41.0159 269.746 41.0261C284.247 41.0261 290.925 48.1588 290.925 59.7859C290.925 73.1976 283.037 80.443 268.133 80.443ZM270.256 45.9176C268.299 45.9176 266.633 46.0362 265.251 46.3208V75.3202C265.998 75.4388 267.433 75.4922 269.45 75.4922C278.951 75.4922 284.36 70.0848 284.36 59.9578C284.36 50.9278 279.467 45.9176 270.256 45.9176ZM311.736 80.7335C303.563 80.7335 298.267 74.6324 298.267 66.3494C298.267 57.7166 303.676 51.5622 312.198 51.5622C320.252 51.5622 325.667 57.3727 325.667 65.8929C325.667 74.6324 320.086 80.7335 311.736 80.7335ZM311.973 56.1039C307.484 56.1039 304.607 60.3017 304.607 66.1716C304.607 71.9287 307.543 76.1266 311.914 76.1266C316.285 76.1266 319.22 71.6382 319.22 66.053C319.22 60.361 316.344 56.1039 311.973 56.1039ZM372.271 52.1373L363.523 80.0991H357.823L354.2 67.9562C353.299 64.986 352.548 61.9721 351.952 58.9262H351.833C351.377 61.9737 350.511 65.0272 349.592 67.9562L345.737 80.0991H339.978L331.746 52.1373H338.133L341.3 65.4304C342.048 68.5966 342.676 71.5849 343.198 74.4071H343.317C343.774 72.0533 344.521 69.1124 345.618 65.4897L349.592 52.1432H354.656L358.458 65.2051C359.377 68.3713 360.124 71.4781 360.706 74.4131H360.872C361.275 71.5374 361.91 68.4839 362.77 65.2051L366.168 52.1432L372.271 52.1373ZM404.474 80.0991H398.259V64.043C398.259 59.0981 396.361 56.6197 392.619 56.6197C388.936 56.6197 386.403 59.7859 386.403 63.4679V80.0991H380.188V60.1298C380.188 57.6573 380.129 55.007 379.957 52.1314H385.425L385.715 56.4478H385.887C387.56 53.4595 390.952 51.5622 394.754 51.5622C400.625 51.5622 404.48 56.0505 404.48 63.3552L404.474 80.0991ZM421.614 80.0991H415.393V39.3066H421.614V80.0991ZM444.275 80.7335C436.109 80.7335 430.807 74.6324 430.807 66.3494C430.807 57.7166 436.215 51.5622 444.732 51.5622C452.792 51.5622 458.201 57.3727 458.201 65.8929C458.207 74.6324 452.62 80.7335 444.275 80.7335ZM444.507 56.1039C440.017 56.1039 437.141 60.3017 437.141 66.1716C437.141 71.9287 440.082 76.1266 444.441 76.1266C448.818 76.1266 451.748 71.6382 451.748 66.053C451.754 60.361 448.883 56.1039 444.507 56.1039ZM482.706 80.0991L482.256 76.8796H482.089C480.192 79.4706 477.422 80.7335 473.911 80.7335C468.9 80.7335 465.341 77.2235 465.341 72.5039C465.341 65.6024 471.325 62.033 481.686 62.033V61.5172C481.686 57.8352 479.735 55.9912 475.88 55.9912C473.122 55.9912 470.703 56.6849 468.573 58.0664L467.31 53.9813C469.896 52.3685 473.122 51.5622 476.912 51.5622C484.219 51.5622 487.907 55.4161 487.907 63.1299V73.4288C487.907 76.2511 488.032 78.4389 488.311 80.105L482.706 80.0991ZM481.852 66.1716C474.949 66.1716 471.485 67.8436 471.485 71.8102C471.485 74.7451 473.271 76.1799 475.75 76.1799C478.911 76.1799 481.852 73.7668 481.852 70.488V66.1716ZM518.089 80.0991L517.798 75.6107H517.626C515.841 79.0022 512.84 80.7335 508.647 80.7335C501.904 80.7335 496.91 74.8044 496.91 66.4621C496.91 57.7166 502.088 51.5562 509.157 51.5562C512.899 51.5562 515.551 52.8191 517.045 55.3568H517.17V39.3066H523.391V72.5632C523.391 75.2669 523.456 77.7986 523.622 80.0991H518.089ZM517.17 63.6457C517.17 59.7325 514.578 56.3944 510.622 56.3944C506.014 56.3944 503.197 60.4796 503.197 66.2308C503.197 71.8695 506.121 75.7293 510.498 75.7293C514.406 75.7293 517.17 72.3319 517.17 68.3061V63.6457ZM562.836 80.7335C554.669 80.7335 549.373 74.6324 549.373 66.3494C549.373 57.7166 554.782 51.5622 563.299 51.5622C571.358 51.5622 576.767 57.3727 576.767 65.8929C576.773 74.6324 571.192 80.7335 562.836 80.7335ZM563.067 56.1039C558.584 56.1039 555.707 60.3017 555.707 66.1716C555.707 71.9287 558.643 76.1266 563.008 76.1266C567.385 76.1266 570.315 71.6382 570.315 66.053C570.327 60.361 567.45 56.1039 563.067 56.1039ZM610.193 80.0991H603.971V64.043C603.971 59.0981 602.074 56.6197 598.331 56.6197C594.648 56.6197 592.122 59.7859 592.122 63.4679V80.0991H585.901V60.1298C585.901 57.6573 585.841 55.007 585.669 52.1314H591.137L591.428 56.4478H591.6C593.266 53.4595 596.665 51.5562 600.46 51.5562C606.332 51.5562 610.193 56.0446 610.193 63.3493V80.0991ZM652.01 56.7976H645.172V70.3753C645.172 73.832 646.37 75.5574 648.79 75.5574C649.887 75.5574 650.806 75.4388 651.548 75.2669L651.72 79.9864C650.516 80.4489 648.902 80.6802 646.898 80.6802C641.999 80.6802 639.069 77.9765 639.069 70.8971V56.7976H634.989V52.1373H639.069V47.0145L645.172 45.1706V52.1314H652.01V56.7976ZM684.914 80.0991H678.704V64.1616C678.704 59.1574 676.812 56.6256 673.064 56.6256C669.844 56.6256 666.843 58.8135 666.843 63.2426V80.0991H660.633V39.3066H666.843V56.1039H666.967C668.925 53.0563 671.759 51.5562 675.377 51.5562C681.296 51.5562 684.914 56.1572 684.914 63.4679V80.0991ZM718.624 67.6123H699.972C700.09 72.9071 703.595 75.8953 708.785 75.8953C711.543 75.8953 714.081 75.4329 716.323 74.5731L717.289 78.8896C714.644 80.0398 711.531 80.6149 707.907 80.6149C699.159 80.6149 693.982 75.089 693.982 66.5214C693.982 57.9478 699.284 51.5029 707.207 51.5029C714.354 51.5029 718.837 56.7976 718.837 64.796C718.878 65.7399 718.806 66.6853 718.624 67.6123ZM712.924 63.1833C712.924 58.8669 710.748 55.8193 706.774 55.8193C703.204 55.8193 700.381 58.9262 699.978 63.1833H712.924Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_614_63"
          x1="586.896"
          y1="238.183"
          x2="586.896"
          y2="-616.915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A1A1A" stopOpacity="0.1" />
          <stop offset="0.123" stopColor="#212121" stopOpacity="0.151" />
          <stop offset="0.308" stopColor="#353535" stopOpacity="0.227" />
          <stop offset="0.532" stopColor="#575757" stopOpacity="0.318" />
          <stop offset="0.783" stopColor="#858585" stopOpacity="0.421" />
          <stop offset="1" stopColor="#B3B3B3" stopOpacity="0.51" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const GoogleStoreIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 800 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M770.37 237.518H29.6296C13.037 237.518 0 224.481 0 207.889V30.1111C0 13.5185 13.037 0.481445 29.6296 0.481445H770.37C786.963 0.481445 800 13.5185 800 30.1111V207.889C800 224.481 786.963 237.518 770.37 237.518Z"
        fill="black"
      />
      <path
        d="M770.37 5.22219C784 5.22219 795.259 16.4814 795.259 30.1111V207.889C795.259 221.518 784 232.778 770.37 232.778H29.6296C16 232.778 4.74074 221.518 4.74074 207.889V30.1111C4.74074 16.4814 16 5.22219 29.6296 5.22219H770.37ZM770.37 0.481445H29.6296C13.037 0.481445 0 14.1111 0 30.1111V207.889C0 224.481 13.037 237.518 29.6296 237.518H770.37C786.963 237.518 800 224.481 800 207.889V30.1111C800 14.1111 786.963 0.481445 770.37 0.481445Z"
        fill="#A6A6A6"
      />
      <path
        d="M280.889 60.9257C280.889 65.6664 279.704 69.8146 276.741 72.7775C273.185 76.3331 269.037 78.1109 263.704 78.1109C258.37 78.1109 254.222 76.3331 250.667 72.7775C247.111 69.222 245.333 65.0738 245.333 59.7405C245.333 54.4072 247.111 50.259 250.667 46.7035C254.222 43.1479 258.37 41.3701 263.704 41.3701C266.074 41.3701 268.444 41.9627 270.815 43.1479C273.185 44.3331 274.963 45.5183 276.148 47.296L273.185 50.259C270.815 47.296 267.852 46.1109 263.704 46.1109C260.148 46.1109 256.593 47.296 254.222 50.259C251.259 52.6294 250.074 56.1849 250.074 60.3331C250.074 64.4812 251.259 68.0368 254.222 70.4072C257.185 72.7775 260.148 74.5553 263.704 74.5553C267.852 74.5553 270.815 73.3701 273.778 70.4072C275.556 68.6294 276.741 66.259 276.741 63.296H263.704V58.5553H280.889V60.9257ZM308.148 46.1109H292.148V57.3701H306.963V61.5183H292.148V72.7775H308.148V77.5183H287.407V41.9627H308.148V46.1109ZM327.704 77.5183H322.963V46.1109H312.889V41.9627H337.778V46.1109H327.704V77.5183ZM354.963 77.5183V41.9627H359.704V77.5183H354.963ZM379.852 77.5183H375.111V46.1109H365.037V41.9627H389.333V46.1109H379.259V77.5183H379.852ZM436.148 72.7775C432.593 76.3331 428.444 78.1109 423.111 78.1109C417.778 78.1109 413.63 76.3331 410.074 72.7775C406.519 69.222 404.741 65.0738 404.741 59.7405C404.741 54.4072 406.519 50.259 410.074 46.7035C413.63 43.1479 417.778 41.3701 423.111 41.3701C428.444 41.3701 432.593 43.1479 436.148 46.7035C439.704 50.259 441.482 54.4072 441.482 59.7405C441.482 65.0738 439.704 69.222 436.148 72.7775ZM413.63 69.8146C416 72.1849 419.556 73.9627 423.111 73.9627C426.667 73.9627 430.222 72.7775 432.593 69.8146C434.963 67.4442 436.741 63.8886 436.741 59.7405C436.741 55.5923 435.556 52.0368 432.593 49.6664C430.222 47.296 426.667 45.5183 423.111 45.5183C419.556 45.5183 416 46.7035 413.63 49.6664C411.259 52.0368 409.481 55.5923 409.481 59.7405C409.481 63.8886 410.667 67.4442 413.63 69.8146ZM448 77.5183V41.9627H453.333L470.519 69.8146V41.9627H475.259V77.5183H470.519L452.148 48.4812V77.5183H448Z"
        fill="white"
        stroke="white"
        strokeMiterlimit="10"
      />
      <path
        d="M403.556 129.667C389.333 129.667 378.074 140.333 378.074 155.148C378.074 169.37 389.333 180.63 403.556 180.63C417.778 180.63 429.037 169.963 429.037 155.148C429.037 139.741 417.778 129.667 403.556 129.667ZM403.556 169.963C395.852 169.963 389.333 163.445 389.333 154.556C389.333 145.667 395.852 139.148 403.556 139.148C411.259 139.148 417.778 145.074 417.778 154.556C417.778 163.445 411.259 169.963 403.556 169.963ZM348.444 129.667C334.222 129.667 322.963 140.333 322.963 155.148C322.963 169.37 334.222 180.63 348.444 180.63C362.667 180.63 373.926 169.963 373.926 155.148C373.926 139.741 362.667 129.667 348.444 129.667ZM348.444 169.963C340.741 169.963 334.222 163.445 334.222 154.556C334.222 145.667 340.741 139.148 348.444 139.148C356.148 139.148 362.667 145.074 362.667 154.556C362.667 163.445 356.148 169.963 348.444 169.963ZM282.667 137.37V148.037H308.148C307.556 153.963 305.185 158.704 302.222 161.667C298.667 165.222 292.741 169.37 282.667 169.37C266.667 169.37 254.815 156.926 254.815 140.926C254.815 124.926 267.259 112.482 282.667 112.482C290.963 112.482 297.481 116.037 302.222 120.185L309.926 112.482C303.407 106.556 295.111 101.815 283.259 101.815C261.926 101.815 243.556 119.593 243.556 140.926C243.556 162.259 261.926 180.037 283.259 180.037C295.111 180.037 303.407 176.482 310.519 168.778C317.63 161.667 320 151.593 320 143.889C320 141.519 320 139.148 319.407 137.37H282.667ZM551.704 145.667C549.333 139.741 543.407 129.667 530.37 129.667C517.333 129.667 506.667 139.741 506.667 155.148C506.667 169.37 517.333 180.63 531.556 180.63C542.815 180.63 549.926 173.519 552.296 169.37L544 163.445C541.037 167.593 537.481 170.556 531.556 170.556C525.63 170.556 522.074 168.185 519.111 162.852L552.889 148.63L551.704 145.667ZM517.333 153.963C517.333 144.482 525.037 139.148 530.37 139.148C534.519 139.148 538.667 141.519 539.852 144.482L517.333 153.963ZM489.481 178.259H500.741V104.185H489.481V178.259ZM471.704 135C468.741 132.037 464 129.074 458.074 129.074C445.63 129.074 433.778 140.333 433.778 154.556C433.778 168.778 445.037 179.445 458.074 179.445C464 179.445 468.741 176.482 471.111 173.519H471.704V177.074C471.704 186.556 466.37 191.889 458.074 191.889C451.556 191.889 446.815 187.148 445.63 183L436.148 187.148C439.111 193.667 446.222 201.963 458.667 201.963C471.704 201.963 482.37 194.259 482.37 175.889V130.852H471.704V135ZM458.667 169.963C450.963 169.963 444.444 163.445 444.444 154.556C444.444 145.667 450.963 139.148 458.667 139.148C466.37 139.148 472.296 145.667 472.296 154.556C472.296 163.445 466.37 169.963 458.667 169.963ZM603.259 104.185H576.593V178.259H587.852V150.408H603.259C615.704 150.408 627.556 141.519 627.556 127.296C627.556 113.074 615.704 104.185 603.259 104.185ZM603.852 139.741H587.852V114.259H603.852C612.148 114.259 616.889 121.37 616.889 126.704C616.296 133.222 611.556 139.741 603.852 139.741ZM672 129.074C663.704 129.074 655.407 132.63 652.444 140.333L662.519 144.482C664.889 140.333 668.444 139.148 672.593 139.148C678.518 139.148 683.852 142.704 684.444 148.63V149.222C682.667 148.037 677.926 146.259 673.185 146.259C662.518 146.259 651.852 152.185 651.852 162.852C651.852 172.926 660.741 179.445 670.222 179.445C677.926 179.445 681.481 175.889 684.444 172.333H685.037V178.259H695.704V149.815C694.519 136.778 684.444 129.074 672 129.074ZM670.815 169.963C667.259 169.963 661.926 168.185 661.926 163.445C661.926 157.519 668.444 155.741 673.778 155.741C678.518 155.741 680.889 156.926 683.852 158.111C682.667 165.222 676.741 169.963 670.815 169.963ZM733.037 130.852L720.593 162.852H720L706.963 130.852H695.111L714.667 175.889L703.407 200.778H714.667L744.889 130.852H733.037ZM633.481 178.259H644.741V104.185H633.481V178.259Z"
        fill="white"
      />
      <path
        d="M61.6296 44.9258C59.8519 46.7036 59.2593 49.6665 59.2593 53.2221V184.185C59.2593 187.741 60.4445 190.704 62.2222 192.481L62.8148 193.074L136.296 119.592V118.407L61.6296 44.9258Z"
        fill="url(#paint0_linear_614_87)"
      />
      <path
        d="M160 144.481L135.704 120.185V118.407L160 94.1108L160.593 94.7034L189.63 111.296C197.926 116.037 197.926 123.74 189.63 128.481L160 144.481Z"
        fill="url(#paint1_linear_614_87)"
      />
      <path
        d="M160.593 143.889L135.704 119L61.6296 193.074C64.5926 196.037 68.7408 196.037 74.0741 193.667L160.593 143.889Z"
        fill="url(#paint2_linear_614_87)"
      />
      <path
        d="M160.593 94.1107L74.0741 44.9255C68.7408 41.9626 64.5926 42.5552 61.6296 45.5181L135.704 119L160.593 94.1107Z"
        fill="url(#paint3_linear_614_87)"
      />
      <path
        opacity="0.2"
        d="M160 143.296L74.0741 191.888C69.3333 194.851 65.1852 194.259 62.2222 191.888L61.6296 192.481L62.2222 193.074C65.1852 195.444 69.3333 196.037 74.0741 193.074L160 143.296Z"
        fill="black"
      />
      <path
        opacity="0.12"
        d="M61.6296 191.889C59.8519 190.111 59.2593 187.148 59.2593 183.593V184.185C59.2593 187.741 60.4445 190.704 62.2222 192.481V191.889H61.6296ZM189.63 126.704L160 143.296L160.593 143.889L189.63 127.296C193.778 124.926 195.556 121.963 195.556 119C195.556 121.963 193.185 124.333 189.63 126.704Z"
        fill="black"
      />
      <path
        opacity="0.25"
        d="M74.0741 45.5183L189.63 111.296C193.185 113.666 195.556 116.037 195.556 119C195.556 116.037 193.778 113.074 189.63 110.703L74.0741 44.9257C65.7778 40.1849 59.2593 43.7405 59.2593 53.222V53.8146C59.2593 44.9257 65.7778 40.7775 74.0741 45.5183Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_614_87"
          x1="129.185"
          y1="52.0962"
          x2="29.7304"
          y2="151.545"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF" />
          <stop offset="0.007" stopColor="#00A1FF" />
          <stop offset="0.26" stopColor="#00BEFF" />
          <stop offset="0.512" stopColor="#00D2FF" />
          <stop offset="0.76" stopColor="#00DFFF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_614_87"
          x1="200.498"
          y1="119.006"
          x2="57.1082"
          y2="119.006"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000" />
          <stop offset="0.409" stopColor="#FFBD00" />
          <stop offset="0.775" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_614_87"
          x1="147.123"
          y1="132.606"
          x2="12.2608"
          y2="267.468"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_614_87"
          x1="43.2415"
          y1="1.52406"
          x2="103.467"
          y2="61.7493"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071" />
          <stop offset="0.069" stopColor="#2DA771" />
          <stop offset="0.476" stopColor="#15CF74" />
          <stop offset="0.801" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FacebookIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M373.893 700H38.6346C17.291 700 0 682.698 0 661.363V38.6344C0 17.2937 17.2938 0 38.6346 0H661.368C682.703 0 700 17.2937 700 38.6344V661.363C700 682.701 682.701 700 661.368 700H482.99V428.921H573.978L587.603 323.277H482.99V255.83C482.99 225.244 491.483 204.4 535.344 204.4L591.286 204.376V109.887C581.611 108.599 548.403 105.723 509.768 105.723C429.112 105.723 373.893 154.956 373.893 245.368V323.277H282.67V428.921H373.893V700Z"
        fill="#4460A0"
      />
    </svg>
  );
};

export const InstagramIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint0_radial_87_7153)"
      />
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint1_radial_87_7153)"
      />
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint2_radial_87_7153)"
      />
      <path
        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
        >
          <stop stopColor="#B13589" />
          <stop offset="0.79309" stopColor="#C62F94" />
          <stop offset="1" stopColor="#8A3AC8" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
        >
          <stop stopColor="#E0E8B7" />
          <stop offset="0.444662" stopColor="#FB8A2E" />
          <stop offset="0.71474" stopColor="#E2425C" />
          <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
        >
          <stop offset="0.156701" stopColor="#406ADC" />
          <stop offset="0.467799" stopColor="#6A45BE" />
          <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const LinkedinIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill="#0A66C2"
        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
      />
    </svg>
  );
};

export const TwitterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 -4 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Twitter-color</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Icons" stroke="none" stroke-="true" fill="none" fillRule="evenodd">
        <g
          id="Color-"
          transform="translate(-300.000000, -164.000000)"
          fill="#00AAEC"
        >
          <path
            d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
            id="Twitter"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const YouTubeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 -7 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Youtube-color</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Icons" stroke="none" stroke-="true" fill="none" fillRule="evenodd">
        <g
          id="Color-"
          transform="translate(-200.000000, -368.000000)"
          fill="#CE1312"
        >
          <path
            d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z"
            id="Youtube"
          ></path>
        </g>
      </g>
    </svg>
  );
};