import React from "react";
import { Row, Col, Avatar, Tag } from "antd";
import { Content } from "../Content";
const Perfil = () => {
  return (
    <>
      <Row className="header">
        <a href="/inicio">
          <svg
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13.5L1 7.5L7 1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <p> Meu perfil</p>
      </Row>
      <div className="profilePic"></div>
      <Row className="backgroundProfile">
        <svg
          width="120%"
          height="79"
          viewBox="0 0 120% 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_39_61)">
            <rect width="100%" height="79" fill="#110D24" />
            <path
              d="M97.0372 29.5801H80.3522C80.2527 29.5837 80.1534 29.5673 80.0604 29.5317C79.9674 29.4962 79.8824 29.4422 79.8107 29.3731C79.739 29.304 79.682 29.2211 79.643 29.1294C79.6041 29.0378 79.584 28.9392 79.584 28.8396C79.584 28.74 79.6041 28.6414 79.643 28.5497C79.682 28.4581 79.739 28.3752 79.8107 28.3061C79.8824 28.2369 79.9674 28.183 80.0604 28.1474C80.1534 28.1119 80.2527 28.0954 80.3522 28.0991H97.0372C97.2289 28.1061 97.4104 28.1872 97.5435 28.3253C97.6766 28.4634 97.751 28.6478 97.751 28.8396C97.751 29.0314 97.6766 29.2157 97.5435 29.3538C97.4104 29.4919 97.2289 29.573 97.0372 29.5801Z"
              fill="#302656"
            />
            <path
              d="M68.3192 29.5801H62.0063C61.9067 29.5837 61.8075 29.5673 61.7144 29.5317C61.6214 29.4962 61.5365 29.4422 61.4648 29.3731C61.3931 29.304 61.336 29.2211 61.2971 29.1294C61.2581 29.0378 61.238 28.9392 61.238 28.8396C61.238 28.74 61.2581 28.6414 61.2971 28.5497C61.336 28.4581 61.3931 28.3752 61.4648 28.3061C61.5365 28.2369 61.6214 28.183 61.7144 28.1474C61.8075 28.1119 61.9067 28.0954 62.0063 28.0991H68.3192C68.4188 28.0954 68.518 28.1119 68.6111 28.1474C68.7041 28.183 68.789 28.2369 68.8607 28.3061C68.9324 28.3752 68.9895 28.4581 69.0284 28.5497C69.0674 28.6414 69.0875 28.74 69.0875 28.8396C69.0875 28.9392 69.0674 29.0378 69.0284 29.1294C68.9895 29.2211 68.9324 29.304 68.8607 29.3731C68.789 29.4422 68.7041 29.4962 68.6111 29.5317C68.518 29.5673 68.4188 29.5837 68.3192 29.5801Z"
              fill="#367CFF"
            />
            <path
              d="M68.3191 42.9451H62.0061C61.8096 42.9451 61.6211 42.867 61.4821 42.728C61.3432 42.5891 61.2651 42.4006 61.2651 42.2041C61.2651 42.0075 61.3432 41.8191 61.4821 41.6801C61.6211 41.5412 61.8096 41.4631 62.0061 41.4631H68.3191C68.5156 41.4631 68.7041 41.5412 68.8431 41.6801C68.982 41.8191 69.0601 42.0075 69.0601 42.2041C69.0601 42.4006 68.982 42.5891 68.8431 42.728C68.7041 42.867 68.5156 42.9451 68.3191 42.9451Z"
              fill="#367CFF"
            />
            <path
              d="M68.3191 56.3101H62.0061C61.8096 56.3101 61.6211 56.232 61.4821 56.093C61.3432 55.9541 61.2651 55.7656 61.2651 55.5691C61.2651 55.3725 61.3432 55.1841 61.4821 55.0451C61.6211 54.9061 61.8096 54.8281 62.0061 54.8281H68.3191C68.5156 54.8281 68.7041 54.9061 68.8431 55.0451C68.982 55.1841 69.0601 55.3725 69.0601 55.5691C69.0601 55.7656 68.982 55.9541 68.8431 56.093C68.7041 56.232 68.5156 56.3101 68.3191 56.3101Z"
              fill="#367CFF"
            />
            <path
              d="M68.3191 69.6751H62.0061C61.8096 69.6751 61.6211 69.597 61.4821 69.458C61.3432 69.3191 61.2651 69.1306 61.2651 68.9341C61.2651 68.7375 61.3432 68.5491 61.4821 68.4101C61.6211 68.2711 61.8096 68.1931 62.0061 68.1931H68.3191C68.5156 68.1931 68.7041 68.2711 68.8431 68.4101C68.982 68.5491 69.0601 68.7375 69.0601 68.9341C69.0601 69.1306 68.982 69.3191 68.8431 69.458C68.7041 69.597 68.5156 69.6751 68.3191 69.6751Z"
              fill="#367CFF"
            />
            <path
              d="M110.371 42.9451H95.1711C95.0715 42.9487 94.9723 42.9323 94.8792 42.8967C94.7862 42.8611 94.7013 42.8072 94.6296 42.7381C94.5579 42.6689 94.5008 42.5861 94.4619 42.4944C94.4229 42.4027 94.4028 42.3042 94.4028 42.2046C94.4028 42.105 94.4229 42.0064 94.4619 41.9147C94.5008 41.8231 94.5579 41.7402 94.6296 41.6711C94.7013 41.6019 94.7862 41.548 94.8792 41.5124C94.9723 41.4769 95.0715 41.4604 95.1711 41.4641H110.371C110.471 41.4604 110.57 41.4769 110.663 41.5124C110.756 41.548 110.841 41.6019 110.913 41.6711C110.984 41.7402 111.041 41.8231 111.08 41.9147C111.119 42.0064 111.139 42.105 111.139 42.2046C111.139 42.3042 111.119 42.4027 111.08 42.4944C111.041 42.5861 110.984 42.6689 110.913 42.7381C110.841 42.8072 110.756 42.8611 110.663 42.8967C110.57 42.9323 110.471 42.9487 110.371 42.9451Z"
              fill="#302656"
            />
            <path
              d="M216.308 56.3101H105.54C105.344 56.3101 105.155 56.232 105.016 56.093C104.877 55.9541 104.799 55.7656 104.799 55.5691C104.799 55.3725 104.877 55.1841 105.016 55.0451C105.155 54.9061 105.344 54.8281 105.54 54.8281H216.308C216.505 54.8281 216.693 54.9061 216.832 55.0451C216.971 55.1841 217.049 55.3725 217.049 55.5691C217.049 55.7656 216.971 55.9541 216.832 56.093C216.693 56.232 216.505 56.3101 216.308 56.3101Z"
              fill="#302656"
            />
            <path
              d="M296.446 56.3101H232.346C232.149 56.3101 231.961 56.232 231.822 56.093C231.683 55.9541 231.605 55.7656 231.605 55.5691C231.605 55.3725 231.683 55.1841 231.822 55.0451C231.961 54.9061 232.149 54.8281 232.346 54.8281H296.446C296.643 54.8281 296.831 54.9061 296.97 55.0451C297.109 55.1841 297.187 55.3725 297.187 55.5691C297.187 55.7656 297.109 55.9541 296.97 56.093C296.831 56.232 296.643 56.3101 296.446 56.3101Z"
              fill="#0CBC8B"
            />
            <path
              d="M330.845 56.3101H311.2C311.003 56.3101 310.815 56.232 310.676 56.093C310.537 55.9541 310.459 55.7656 310.459 55.5691C310.459 55.3725 310.537 55.1841 310.676 55.0451C310.815 54.9061 311.003 54.8281 311.2 54.8281H330.847C331.044 54.8281 331.232 54.9061 331.371 55.0451C331.51 55.1841 331.588 55.3725 331.588 55.5691C331.588 55.7656 331.51 55.9541 331.371 56.093C331.232 56.232 331.044 56.3101 330.847 56.3101H330.845Z"
              fill="#302656"
            />
            <path
              d="M122.225 69.6751H105.54C105.344 69.6751 105.155 69.597 105.016 69.458C104.877 69.3191 104.799 69.1306 104.799 68.9341C104.799 68.7375 104.877 68.5491 105.016 68.4101C105.155 68.2711 105.344 68.1931 105.54 68.1931H122.225C122.422 68.1931 122.61 68.2711 122.749 68.4101C122.888 68.5491 122.966 68.7375 122.966 68.9341C122.966 69.1306 122.888 69.3191 122.749 69.458C122.61 69.597 122.422 69.6751 122.225 69.6751Z"
              fill="#0CBC8B"
            />
            <path
              d="M252 69.6751H138.265C138.068 69.6751 137.88 69.597 137.741 69.458C137.602 69.3191 137.524 69.1306 137.524 68.9341C137.524 68.7375 137.602 68.5491 137.741 68.4101C137.88 68.2711 138.068 68.1931 138.265 68.1931H252C252.196 68.1931 252.385 68.2711 252.524 68.4101C252.663 68.5491 252.741 68.7375 252.741 68.9341C252.741 69.1306 252.663 69.3191 252.524 69.458C252.385 69.597 252.196 69.6751 252 69.6751Z"
              fill="#367CFF"
            />
            <path
              d="M330.974 69.6751H269.84C269.644 69.6751 269.455 69.597 269.316 69.458C269.177 69.3191 269.099 69.1306 269.099 68.9341C269.099 68.7375 269.177 68.5491 269.316 68.4101C269.455 68.2711 269.644 68.1931 269.84 68.1931H330.974C331.171 68.1931 331.359 68.2711 331.498 68.4101C331.637 68.5491 331.715 68.7375 331.715 68.9341C331.715 69.1306 331.637 69.3191 331.498 69.458C331.359 69.597 331.171 69.6751 330.974 69.6751Z"
              fill="#302656"
            />
            <path
              d="M51.9702 210.622C51.873 210.622 51.7766 210.603 51.6867 210.566C51.5968 210.529 51.5152 210.474 51.4464 210.406C51.3775 210.337 51.3229 210.255 51.2857 210.166C51.2484 210.076 51.2292 209.979 51.2292 209.882V6.25211C51.2292 6.05558 51.3073 5.86711 51.4463 5.72814C51.5853 5.58918 51.7737 5.51111 51.9702 5.51111C52.1668 5.51111 52.3552 5.58918 52.4942 5.72814C52.6332 5.86711 52.7112 6.05558 52.7112 6.25211V209.882C52.7112 209.979 52.6921 210.076 52.6548 210.166C52.6176 210.255 52.563 210.337 52.4941 210.406C52.4253 210.474 52.3436 210.529 52.2537 210.566C52.1638 210.603 52.0675 210.622 51.9702 210.622Z"
              fill="#302656"
            />
            <path
              d="M18.0863 15.5051H-13.9997C-14.1963 15.5051 -14.3847 15.427 -14.5237 15.288C-14.6626 15.1491 -14.7407 14.9606 -14.7407 14.7641C-14.7407 14.5675 -14.6626 14.3791 -14.5237 14.2401C-14.3847 14.1011 -14.1963 14.0231 -13.9997 14.0231H18.0823C18.2788 14.0231 18.4673 14.1011 18.6062 14.2401C18.7452 14.3791 18.8233 14.5675 18.8233 14.7641C18.8233 14.9606 18.7452 15.1491 18.6062 15.288C18.4673 15.427 18.2788 15.5051 18.0823 15.5051H18.0863Z"
              fill="#302656"
            />
            <path
              d="M8.42215 30.1171H-13.9998C-14.0994 30.1207 -14.1986 30.1043 -14.2917 30.0687C-14.3847 30.0331 -14.4696 29.9792 -14.5413 29.9101C-14.613 29.8409 -14.6701 29.7581 -14.709 29.6664C-14.748 29.5747 -14.7681 29.4762 -14.7681 29.3766C-14.7681 29.277 -14.748 29.1784 -14.709 29.0867C-14.6701 28.995 -14.613 28.9122 -14.5413 28.8431C-14.4696 28.7739 -14.3847 28.72 -14.2917 28.6844C-14.1986 28.6488 -14.0994 28.6324 -13.9998 28.6361H8.41815C8.60983 28.6431 8.79132 28.7242 8.92444 28.8623C9.05756 29.0004 9.13193 29.1847 9.13193 29.3766C9.13193 29.5684 9.05756 29.7527 8.92444 29.8908C8.79132 30.0289 8.60983 30.11 8.41815 30.1171H8.42215Z"
              fill="#302656"
            />
            <path
              d="M28.1353 44.73H-13.9997C-14.1963 44.73 -14.3847 44.652 -14.5237 44.513C-14.6626 44.3741 -14.7407 44.1856 -14.7407 43.989C-14.7407 43.7925 -14.6626 43.604 -14.5237 43.4651C-14.3847 43.3261 -14.1963 43.248 -13.9997 43.248H28.1313C28.3278 43.248 28.5163 43.3261 28.6552 43.4651C28.7942 43.604 28.8723 43.7925 28.8723 43.989C28.8723 44.1856 28.7942 44.3741 28.6552 44.513C28.5163 44.652 28.3278 44.73 28.1313 44.73H28.1353Z"
              fill="#302656"
            />
            <path
              d="M35.9942 59.342H0.821198C0.721664 59.3457 0.622392 59.3292 0.529358 59.2937C0.436324 59.2581 0.351434 59.2042 0.279724 59.135C0.208014 59.0659 0.150959 58.983 0.112 58.8914C0.0730405 58.7997 0.0529785 58.7011 0.0529785 58.6015C0.0529785 58.5019 0.0730405 58.4034 0.112 58.3117C0.150959 58.22 0.208014 58.1372 0.279724 58.068C0.351434 57.9989 0.436324 57.945 0.529358 57.9094C0.622392 57.8738 0.721664 57.8574 0.821198 57.861H35.9942C36.0937 57.8574 36.193 57.8738 36.286 57.9094C36.379 57.945 36.4639 57.9989 36.5356 58.068C36.6074 58.1372 36.6644 58.22 36.7034 58.3117C36.7423 58.4034 36.7624 58.5019 36.7624 58.6015C36.7624 58.7011 36.7423 58.7997 36.7034 58.8914C36.6644 58.983 36.6074 59.0659 36.5356 59.135C36.4639 59.2042 36.379 59.2581 36.286 59.2937C36.193 59.3292 36.0937 59.3457 35.9942 59.342Z"
              fill="#302656"
            />
            <path
              d="M18.9871 73.9551H0.821106C0.624581 73.9551 0.436084 73.877 0.297119 73.738C0.158155 73.5991 0.0800781 73.4106 0.0800781 73.2141C0.0800781 73.0176 0.158155 72.8291 0.297119 72.6901C0.436084 72.5511 0.624581 72.4731 0.821106 72.4731H18.9871C19.1836 72.4731 19.3721 72.5511 19.511 72.6901C19.65 72.8291 19.7281 73.0176 19.7281 73.2141C19.7281 73.4106 19.65 73.5991 19.511 73.738C19.3721 73.877 19.1836 73.9551 18.9871 73.9551Z"
              fill="#302656"
            />
            <path
              d="M67.3112 12.3711V12.6381L76.5722 16.0751C76.7045 16.129 76.8176 16.2214 76.8968 16.3403C76.9759 16.4593 77.0175 16.5992 77.0162 16.7421V16.9941C77.0181 17.1057 76.9916 17.2159 76.9391 17.3145C76.8866 17.413 76.8099 17.4965 76.7162 17.5571C76.6225 17.6232 76.5136 17.6646 76.3997 17.6775C76.2857 17.6905 76.1704 17.6745 76.0642 17.6311L65.6042 13.5411C65.4735 13.4891 65.3614 13.3993 65.2821 13.2831C65.2028 13.1669 65.16 13.0297 65.1592 12.8891V12.1341C65.1581 11.993 65.2001 11.855 65.2796 11.7384C65.3592 11.6219 65.4724 11.5325 65.6042 11.4821L76.0642 7.3821C76.1498 7.3527 76.2397 7.33749 76.3302 7.3371C76.4674 7.3401 76.6011 7.38131 76.7162 7.4561C76.8105 7.51972 76.8874 7.60595 76.9398 7.70692C76.9922 7.80788 77.0184 7.92036 77.0162 8.0341V8.2851C77.0193 8.42648 76.9782 8.5653 76.8986 8.68219C76.819 8.79908 76.7049 8.88819 76.5722 8.9371L67.3112 12.3711Z"
              fill="#367CFF"
            />
            <path
              d="M85.6692 4.35508L80.1282 21.3201C80.0834 21.4619 79.9946 21.5857 79.8746 21.6736C79.7547 21.7615 79.6099 21.809 79.4612 21.8091C79.3536 21.8108 79.2472 21.786 79.1514 21.7368C79.0557 21.6876 78.9735 21.6156 78.9122 21.5271C78.8461 21.4394 78.8011 21.3377 78.7806 21.2299C78.7601 21.122 78.7648 21.0109 78.7942 20.9051L84.3352 3.95508C84.3832 3.81142 84.4745 3.68618 84.5967 3.59663C84.7188 3.50707 84.8658 3.45762 85.0172 3.45508C85.1244 3.45496 85.2301 3.48049 85.3254 3.52955C85.4208 3.57861 85.503 3.64976 85.5652 3.73708C85.6308 3.82419 85.6745 3.92582 85.6926 4.03338C85.7107 4.14094 85.7027 4.25128 85.6692 4.35508Z"
              fill="#367CFF"
            />
            <path
              d="M99.2763 12.1341V12.8891C99.2785 13.0282 99.2388 13.1649 99.1623 13.2812C99.0858 13.3975 98.976 13.488 98.8472 13.5411L88.3713 17.631C88.2676 17.674 88.1546 17.6897 88.0431 17.6768C87.9317 17.6638 87.8254 17.6226 87.7343 17.557C87.6396 17.4966 87.5616 17.4134 87.5073 17.315C87.453 17.2167 87.4241 17.1064 87.4233 16.9941V16.742C87.4213 16.5969 87.4645 16.4547 87.547 16.3352C87.6294 16.2157 87.7469 16.1248 87.8833 16.075L97.1433 12.6381V12.3711L87.8833 8.93305C87.7469 8.88792 87.6286 8.80022 87.5458 8.68286C87.463 8.56549 87.4201 8.42465 87.4233 8.28105V8.03005C87.4239 7.91563 87.4526 7.80311 87.5068 7.70234C87.561 7.60158 87.6391 7.51564 87.7343 7.45205C87.8491 7.37739 87.9824 7.33618 88.1192 7.33305C88.2053 7.33208 88.2908 7.34735 88.3713 7.37805L98.8472 11.478C98.9777 11.5298 99.089 11.6206 99.1658 11.738C99.2426 11.8555 99.2812 11.9938 99.2763 12.1341Z"
              fill="#367CFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_61">
              <rect width="120%" height="79" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Row>
      <div className="conteudo">
        <Avatar
          style={{
            verticalAlign: "middle",
            marginRight: "10px",
            border: "2px solid #383353",
            marginTop: "40px",
          }}
          size={80}
          gap={4}
        >
          {"Lucy"}
        </Avatar>
        <div className="principalContent"> Lucy Silva</div>
        <Tag
          bordered
          style={{
            color: " #8F8BAB",
            justifyItems: "center",
            border: "1px solid #8F8BAB",
            borderRadius: "24px",
            padding: "0.1rem",
          }}
        >
          INICIANTE
        </Tag>
        <p className="principalContent" style={{ textAlign: "start" }}>
          Cursos
        </p>
        <Content
          title="Lógica de programação"
          description="10 HORAS"
          svg={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6ZM12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16Z"
                fill="white"
              />
            </svg>
          }
        ></Content>
        <Content
          title="Lógica de programação"
          description="10 HORAS"
          svg={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6ZM12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16Z"
                fill="white"
              />
            </svg>
          }
        ></Content>
        <p className="principalContent" style={{ textAlign: "start" }}>
          Projetos
        </p>
        <Content
          title="Programa de calculadora de notas"
          description="PYTHON | LÓGICA | INICIANTE"
          svg={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6ZM12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16Z"
                fill="white"
              />
            </svg>
          }
        ></Content>
        <Content
          title="Programa de calculadora de notas"
          description="PYTHON | LÓGICA | INICIANTE"
          svg={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6ZM12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16Z"
                fill="white"
              />
            </svg>
          }
        ></Content>
        <Content
          title="Lógica de programação"
          description="PYTHON | LÓGICA | INICIANTE"
          svg={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6ZM12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16Z"
                fill="white"
              />
            </svg>
          }
        ></Content>
      </div>
    </>
  );
};

export default Perfil;
