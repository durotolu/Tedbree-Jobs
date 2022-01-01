import React, { useState, useEffect } from 'react';
import axios from "axios";
import image from "./images/login-image.png";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const changeValue = e => setLoginData({...loginData, [e.target.name]: e.target.value});

  const isDisabled = () => !loginData.email || !loginData.password;
  
  const onLogin = (event) => {
    console.log("here")
    window.location.reload()
    event.preventDefault();
  //   // props.addSmurfData(props.form);
    axios.post(`https://api.jobboard.tedbree.com/v1/login`, loginData)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err.response)
    });
  }

  return (
    <div className="flex">
      <div className="bg-[#0F4A7B] w-1/2 h-screen">
        <div className="ml-20 mt-9 mb-[140px]">
          <svg width="125" height="37" viewBox="0 0 125 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6453 13.068C16.0308 13.1443 15.3424 13.1835 14.5801 13.1855C13.8377 13.162 12.9061 13.1041 11.7855 13.0118L11.1939 19.9932L16.1781 19.3744L15.945 21.9721L10.9608 22.5909L9.78685 35.7888L4.87094 36.3991L6.95987 12.9513C5.39797 13.2146 4.33479 13.9599 3.77034 15.1871C3.22864 16.4114 3.1045 18.2088 3.39792 20.5792C3.45152 21.0122 3.52083 21.3854 3.60585 21.6989C3.71362 22.0095 3.85413 22.3045 4.02736 22.5838C4.08416 22.6693 4.11538 22.7349 4.12103 22.7805C4.14661 22.8004 4.16081 22.8218 4.16363 22.8446C2.88913 23.0028 1.92357 22.8566 1.26695 22.4058C0.630266 21.9294 0.24139 21.1215 0.100323 19.9819C-0.235417 17.2696 0.510737 14.9901 2.33878 13.1432C4.18677 11.2706 6.95423 10.1055 10.6412 9.64781C10.846 9.62238 11.0978 9.6027 11.3964 9.58876C11.6951 9.57482 12.1901 9.55966 12.8813 9.54327C13.803 9.52142 14.5056 9.50362 14.9891 9.48987C15.4927 9.4505 15.9493 9.40539 16.3589 9.35453C16.9734 9.27824 17.5268 9.17483 18.019 9.0443C18.5112 8.91376 18.9651 8.75328 19.3806 8.56284C19.3635 8.61125 19.3048 8.97724 19.2045 9.66081C19.1043 10.3444 18.953 10.8954 18.7506 11.314C18.5482 11.7325 18.2691 12.0912 17.9132 12.3899C17.5773 12.663 17.1546 12.8891 16.6453 13.068Z" fill="#C6E3E8" />
            <path d="M23.289 12.1391C23.3821 12.8912 23.188 13.5633 22.7067 14.1553C22.2481 14.7445 21.6433 15.0857 20.8923 15.179C20.1412 15.2722 19.4715 15.0892 18.8832 14.63C18.2949 14.1708 17.9541 13.5651 17.861 12.8129C17.7679 12.0608 17.9507 11.3901 18.4092 10.8009C18.865 10.189 19.4684 9.83633 20.2194 9.7431C20.9704 9.64986 21.6415 9.84425 22.2327 10.3263C22.8438 10.7827 23.1959 11.3869 23.289 12.1391ZM16.7802 30.9633C16.7435 30.667 16.7253 30.3337 16.7257 29.9634C16.7233 29.5703 16.7408 29.1515 16.7782 28.7072L17.7411 17.4447L22.657 16.8344L21.638 28.7634C21.6178 28.9742 21.6077 29.1722 21.6075 29.3573C21.6045 29.5197 21.6143 29.692 21.6368 29.8744C21.6933 30.3302 21.8366 30.648 22.0668 30.8277C22.317 30.9818 22.6924 31.0277 23.1931 30.9656C23.8303 30.8864 24.3996 30.5381 24.9009 29.9204C25.3993 29.28 25.73 28.4984 25.8931 27.5756L27.3269 27.3976C26.8554 29.5621 26.0714 31.2562 24.9751 32.48C23.8787 33.7038 22.5339 34.4146 20.9408 34.6124C19.8029 34.7536 18.8602 34.512 18.1127 33.8873C17.3852 33.2371 16.941 32.2624 16.7802 30.9633Z" fill="#C6E3E8" />
            <path d="M34.2131 29.042C34.1623 28.6318 34.1444 28.1133 34.1592 27.4866C34.1969 26.8571 34.2918 25.8502 34.4439 24.466C34.6017 23.1273 34.6909 22.1674 34.7114 21.5863C34.7319 21.0052 34.7182 20.5209 34.6702 20.1334C34.5997 19.5636 34.4436 19.1433 34.2021 18.8724C33.9606 18.6016 33.635 18.4916 33.2254 18.5424C32.6792 18.6102 32.2024 18.9587 31.795 19.5878C31.4075 20.1914 31.1265 21.0015 30.9519 22.0183L29.989 33.2808L25.0731 33.8911L26.5757 16.3479L31.4917 15.7376L31.3362 17.562C31.8262 16.8532 32.3814 16.2983 33.0019 15.8972C33.6224 15.4962 34.3196 15.2477 35.0934 15.1516C36.2996 15.0019 37.2736 15.2165 38.0155 15.7955C38.7573 16.3746 39.2058 17.2908 39.361 18.5444C39.4259 19.0686 39.4352 19.7039 39.3889 20.4502C39.3626 21.1708 39.259 22.2945 39.0783 23.8212C38.9263 25.0203 38.8344 25.8648 38.8026 26.3548C38.7708 26.8447 38.7747 27.2492 38.8142 27.5683C38.8734 28.0469 39.0324 28.3975 39.291 28.6199C39.5468 28.8196 39.9023 28.8912 40.3575 28.8347C40.9264 28.764 41.3918 28.5096 41.7535 28.0712C42.1152 27.6329 42.4816 26.7659 42.8527 25.4701L44.2865 25.2921C43.8206 27.5022 43.1291 29.1964 42.2119 30.3748C41.3176 31.5504 40.1535 32.2272 38.7197 32.4052C37.4452 32.5634 36.4128 32.3444 35.6227 31.7483C34.8297 31.1293 34.3598 30.2272 34.2131 29.042Z" fill="#C6E3E8" />
            <path d="M47.5663 25.2321C47.6764 26.121 47.8848 26.7778 48.1915 27.2025C48.4955 27.6045 48.9661 27.7659 49.6033 27.6868C50.1723 27.6162 50.6975 27.2849 51.1788 26.6928C51.6573 26.078 51.9482 25.3476 52.0514 24.5017L52.0303 24.3308L52.7339 16.2941C52.6205 15.9379 52.4259 15.6728 52.1502 15.4987C51.8944 15.299 51.573 15.2232 51.1861 15.2713C49.9344 15.4267 48.949 16.6135 48.2299 18.8319C47.5336 21.0474 47.3124 23.1808 47.5663 25.2321ZM52.8465 14.6833L52.8634 14.82L53.5628 6.74916L58.5307 5.43816L56.89 24.387C56.8699 24.5978 56.8598 24.7957 56.8596 24.9809C56.8566 25.1433 56.8663 25.3156 56.8889 25.498C56.9453 25.9538 57.0887 26.2716 57.3189 26.4513C57.569 26.6053 57.9445 26.6513 58.4452 26.5891C59.0369 26.5157 59.5393 26.1872 59.9523 25.6036C60.3654 25.0201 60.6606 24.2313 60.838 23.2373L62.2718 23.0593C61.8173 25.1754 61.0846 26.8169 60.0737 27.9838C59.0854 29.1479 57.7834 29.8302 56.1675 30.0308C55.2344 30.1467 54.4409 29.9906 53.7871 29.5626C53.1533 29.1091 52.7102 28.4235 52.458 27.506C51.905 28.6392 51.2399 29.5202 50.4627 30.1489C49.6855 30.7777 48.7963 31.1542 47.7949 31.2785C46.3838 31.4537 45.2094 31.1135 44.2716 30.258C43.3565 29.3996 42.7904 28.0929 42.5731 26.338C42.4151 25.0616 42.4435 23.7043 42.6583 22.2659C42.8731 20.8276 43.2514 19.4962 43.7931 18.2719C44.4687 16.8226 45.3204 15.6755 46.3481 14.8305C47.373 13.9627 48.5454 13.4469 49.8655 13.283C50.7531 13.1728 51.4556 13.2476 51.973 13.5073C52.4876 13.7443 52.7788 14.1363 52.8465 14.6833Z" fill="#C6E3E8" />
            <path d="M65.919 11.8107C65.7779 10.6711 66.0124 9.4849 66.6224 8.25206C67.2551 7.0164 68.1978 5.85797 69.4505 4.77677C70.5181 3.88054 71.6865 3.14536 72.9557 2.57123C74.2449 1.97148 75.5267 1.5925 76.8012 1.43427L78.1668 1.26475L76.0507 26.1738C75.8059 29.2359 75.0483 31.5168 73.7782 33.0168C72.508 34.5167 70.6212 35.4221 68.1177 35.7329C66.5473 35.9278 65.2533 35.6488 64.2358 34.8957C63.241 34.1398 62.6519 33.0211 62.4685 31.5396C62.3077 30.2405 62.5606 29.1099 63.2272 28.1477C63.8909 27.1627 64.8373 26.594 66.0663 26.4414C67.2953 26.2888 68.1841 26.3752 68.7327 26.7005C69.2786 27.003 69.5994 27.5417 69.6954 28.3167C69.7179 28.499 69.7206 28.7069 69.7033 28.9405C69.7115 29.1941 69.6971 29.4504 69.6598 29.7096C69.2334 29.4385 68.8638 29.253 68.551 29.153C68.2382 29.053 67.8884 29.027 67.5015 29.075C66.796 29.1626 66.2452 29.474 65.8493 30.0091C65.4761 30.5414 65.3347 31.1722 65.425 31.9016C65.5153 32.6309 65.8034 33.1853 66.2894 33.5646C66.7982 33.9412 67.3826 34.0885 68.0426 34.0065C68.9302 33.8963 69.5621 33.4939 69.9383 32.7992C70.3401 32.1245 70.6157 30.991 70.7652 29.3988L73.1033 4.32329C71.6347 5.15359 70.5598 6.27058 69.8785 7.67426C69.2172 9.05232 68.9965 10.6302 69.2166 12.408C69.2702 12.8411 69.3395 13.2143 69.4245 13.5277C69.5323 13.8383 69.6728 14.1333 69.846 14.4127C69.9028 14.4982 69.9341 14.5637 69.9397 14.6093C69.9653 14.6293 69.9795 14.6507 69.9823 14.6734C68.7078 14.8317 67.7423 14.6854 67.0856 14.2347C66.449 13.7583 66.0601 12.9503 65.919 11.8107Z" fill="#C6E3E8" />
            <path d="M78.7818 21.8775C78.621 20.5783 78.6552 19.174 78.8842 17.6645C79.1361 16.1521 79.5556 14.7809 80.1429 13.5509C80.8185 12.1016 81.7057 10.9617 82.8045 10.131C83.9005 9.27752 85.1768 8.76037 86.6334 8.57954C88.0899 8.39871 89.2388 8.71893 90.0799 9.54019C90.9211 10.3615 91.4545 11.6838 91.6802 13.5071C91.7285 13.5243 91.7769 13.5414 91.8252 13.5585C91.8935 13.5501 91.9731 13.5402 92.0642 13.5289C92.7697 13.4413 93.5878 13.143 94.5185 12.6341C95.4491 12.1251 96.2988 11.5221 97.0676 10.8249L97.4891 11.7099C96.9365 12.4727 96.1564 13.1713 95.1488 13.8055C94.1639 14.4369 93.0469 14.9342 91.7978 15.2976C91.9056 18.4084 91.3256 21.0029 90.0576 23.0811C88.7897 25.1593 87.0747 26.3326 84.9126 26.6011C83.1374 26.8214 81.7268 26.5337 80.6809 25.7379C79.6349 24.9421 79.0019 23.6552 78.7818 21.8775ZM87.1646 10.6311C86.0722 10.7667 85.1735 12.0007 84.4685 14.333C83.7863 16.6625 83.568 18.8187 83.8134 20.8016C83.946 21.8728 84.1501 22.588 84.4257 22.9472C84.724 23.3036 85.2145 23.4394 85.8973 23.3546C86.7394 23.2501 87.4513 22.4674 88.033 21.0067C88.6376 19.5431 88.9522 17.7915 88.9771 15.7519C88.65 15.7231 88.3927 15.6046 88.2051 15.3965C88.0376 15.1627 87.9284 14.8407 87.8776 14.4305C87.824 13.9974 87.8685 13.6101 88.011 13.2684C88.1536 12.9267 88.3857 12.6549 88.7073 12.4529C88.5715 11.7292 88.3829 11.232 88.1414 10.9611C87.9226 10.6874 87.597 10.5774 87.1646 10.6311Z" fill="#C6E3E8" />
            <path d="M100.046 24.7917C98.5214 24.981 97.2914 24.7519 96.3562 24.1043C95.4409 23.4311 94.8973 22.3993 94.7252 21.009C94.6857 20.6899 94.6689 20.368 94.6749 20.0433C94.681 19.7185 94.697 19.381 94.7229 19.0306L96.2555 1.44903L101.223 0.138023L100.537 8.03372C101.041 7.62403 101.489 7.32538 101.882 7.13777C102.294 6.92455 102.74 6.78827 103.218 6.72893C104.56 6.56223 105.623 6.92794 106.404 7.82605C107.205 8.69855 107.727 10.1148 107.97 12.075C108.136 13.4197 108.102 14.824 107.867 16.288C107.633 17.7519 107.216 19.0533 106.617 20.1922C105.928 21.5275 105.031 22.5877 103.926 23.3728C102.819 24.1351 101.526 24.6081 100.046 24.7917ZM99.5435 19.8901C99.6084 20.4143 99.8057 20.7948 100.135 21.0316C100.485 21.2428 100.956 21.3116 101.547 21.2381C102.572 21.111 103.382 20.0963 103.978 18.194C104.575 16.2917 104.75 14.3492 104.505 12.3663C104.386 11.409 104.118 10.6439 103.701 10.0709C103.306 9.49504 102.835 9.24103 102.289 9.30884C101.925 9.35405 101.545 9.45906 101.15 9.62388C100.754 9.7887 100.488 9.97216 100.351 10.1743L99.5485 19.0911C99.5427 19.2307 99.5369 19.3702 99.5311 19.5098C99.5252 19.6494 99.5294 19.7762 99.5435 19.8901Z" fill="#C6E3E8" />
            <path d="M120.662 16.2269C120.696 16.5004 120.714 16.7412 120.717 16.9491C120.719 17.1571 120.709 17.355 120.686 17.543C121.108 17.213 121.516 16.873 121.912 16.523C122.308 16.1731 122.648 15.8415 122.933 15.5285L124.366 15.3505C123.762 16.2586 123.072 17.1196 122.294 17.9335C121.537 18.7218 120.663 19.5014 119.672 20.2724C119.14 21.0097 118.418 21.6199 117.507 22.1033C116.594 22.5638 115.613 22.8591 114.566 22.9891C113.042 23.1784 111.773 22.9193 110.761 22.2118C109.769 21.4787 109.196 20.4853 109.041 19.2318C108.953 18.5252 109.045 17.8659 109.316 17.2537C109.584 16.6187 109.964 16.1434 110.456 15.8277C111.058 14.3413 111.592 12.7709 112.057 11.1163C112.542 9.43608 112.991 7.45958 113.403 5.1868L118.371 3.8758C118.65 5.57671 118.923 7.12807 119.189 8.52987C119.455 9.93166 119.759 11.456 120.102 13.1028C120.289 14.0516 120.417 14.7183 120.488 15.103C120.559 15.4876 120.617 15.8623 120.662 16.2269ZM114.065 8.85366C113.884 9.82486 113.642 10.8501 113.336 11.9294C113.051 12.9831 112.638 14.2261 112.099 15.6585C112.364 15.7413 112.577 15.8769 112.739 16.065C112.901 16.2532 112.999 16.484 113.033 16.7576C113.086 17.1906 112.986 17.5964 112.733 17.975C112.479 18.3536 112.147 18.5684 111.738 18.6192C111.51 18.6475 111.313 18.6373 111.145 18.5887C110.974 18.5173 110.846 18.4175 110.761 18.2892C110.865 19.1325 111.101 19.7281 111.468 20.076C111.854 20.3983 112.411 20.5143 113.14 20.4238C114.073 20.308 114.767 19.9441 115.223 19.3321C115.679 18.7201 115.843 17.9013 115.716 16.8757C115.677 16.5566 115.626 16.2389 115.564 15.9226C115.498 15.5836 115.384 15.0308 115.22 14.2644C114.973 13.2073 114.765 12.2727 114.595 11.4607C114.425 10.6487 114.249 9.77965 114.065 8.85366Z" fill="#C6E3E8" />
          </svg>

          <svg width="100" height="15" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.67989 1.98484C4.26563 1.98484 3.93808 2.10061 3.69723 2.33216C3.45638 2.55407 3.28296 2.90622 3.17699 3.38861L3.04693 3.99644H5.27238L5.04117 5.13972H2.85907L1.54403 11.6666H0.156738L1.47178 5.13972H0.156738L0.373503 3.99644H1.70299L1.8475 3.27284C2.00165 2.49135 2.31475 1.89318 2.78681 1.47832C3.26851 1.05381 3.89954 0.841553 4.67989 0.841553C4.99781 0.841553 5.29647 0.884969 5.57585 0.9718C5.86487 1.04898 6.1009 1.16476 6.28395 1.31913L5.70591 2.34663C5.43616 2.10544 5.09415 1.98484 4.67989 1.98484Z" fill="white" />
            <path d="M8.53435 11.7534C7.8118 11.7534 7.18077 11.6183 6.64127 11.3482C6.10177 11.0684 5.68269 10.6776 5.38404 10.176C5.08538 9.67426 4.93606 9.09538 4.93606 8.43932C4.93606 7.58065 5.12874 6.80882 5.5141 6.12381C5.89946 5.43881 6.43414 4.90334 7.11815 4.51743C7.80217 4.12186 8.57289 3.92408 9.43031 3.92408C10.1529 3.92408 10.7839 4.05915 11.3234 4.32929C11.8629 4.59943 12.2772 4.98535 12.5662 5.48705C12.8648 5.97909 13.0141 6.55797 13.0141 7.22368C13.0141 8.08235 12.8215 8.85901 12.4361 9.55366C12.0508 10.2387 11.5161 10.779 10.8321 11.1745C10.1577 11.5604 9.39177 11.7534 8.53435 11.7534ZM8.62106 10.5378C9.18946 10.5378 9.70006 10.4027 10.1529 10.1325C10.6153 9.85275 10.9717 9.46683 11.2222 8.97478C11.4823 8.48274 11.6124 7.92315 11.6124 7.29604C11.6124 6.61103 11.4149 6.08039 11.0199 5.70412C10.6249 5.32785 10.0613 5.13972 9.32915 5.13972C8.76075 5.13972 8.25015 5.27961 7.79735 5.5594C7.34455 5.82955 6.9881 6.21064 6.72798 6.70269C6.46786 7.19473 6.3378 7.75432 6.3378 8.38143C6.3378 9.05679 6.5353 9.58743 6.93029 9.97335C7.33492 10.3496 7.89851 10.5378 8.62106 10.5378Z" fill="white" />
            <path d="M16.7536 5.13972C17.0908 4.71521 17.505 4.40647 17.9963 4.21351C18.4877 4.02056 19.085 3.92408 19.7883 3.92408L19.5282 5.26997C19.4414 5.26032 19.321 5.25549 19.1669 5.25549C17.5773 5.25549 16.6139 6.11416 16.2767 7.8315L15.5108 11.6666H14.1235L15.6408 3.99644H16.9703L16.7536 5.13972Z" fill="white" />
            <path d="M25.2755 8.26566V8.35249C25.2755 9.06644 25.4778 9.61155 25.8824 9.98782C26.287 10.3544 26.894 10.5378 27.7032 10.5378C28.1753 10.5378 28.6184 10.4606 29.0327 10.3062C29.447 10.1422 29.7938 9.92511 30.0732 9.65496L30.6657 10.6535C30.2899 11.0009 29.8323 11.271 29.2928 11.464C28.7533 11.6569 28.1849 11.7534 27.5876 11.7534C26.8362 11.7534 26.1859 11.6183 25.6367 11.3482C25.0876 11.078 24.6637 10.6921 24.365 10.1904C24.0664 9.68873 23.9171 9.10021 23.9171 8.42485C23.9171 7.56618 24.1001 6.79434 24.4662 6.10934C24.8419 5.42433 25.3573 4.88887 26.0125 4.50295C26.6772 4.11703 27.419 3.92408 28.2379 3.92408C29.2784 3.92408 30.1069 4.22316 30.7235 4.82134C31.3497 5.40986 31.6628 6.21547 31.6628 7.23815C31.6628 7.54688 31.6291 7.88939 31.5616 8.26566H25.2755ZM28.1801 5.08183C27.4961 5.08183 26.9084 5.27479 26.4171 5.66071C25.9258 6.04663 25.5934 6.57726 25.42 7.25262H30.3622C30.4007 6.56762 30.2177 6.03698 29.8131 5.66071C29.4181 5.27479 28.8737 5.08183 28.1801 5.08183Z" fill="white" />
            <path d="M43.6618 3.92408C44.5289 3.92408 45.2033 4.14598 45.685 4.58978C46.1763 5.02394 46.422 5.64624 46.422 6.45666C46.422 6.67857 46.3883 6.98248 46.3208 7.3684L45.4682 11.6666H44.0809L44.9335 7.3684C44.9817 7.09825 45.0058 6.87635 45.0058 6.70269C45.0058 6.20099 44.8661 5.8199 44.5867 5.5594C44.3073 5.29891 43.8834 5.16866 43.315 5.16866C42.6021 5.16866 42.0144 5.37127 41.552 5.77648C41.0992 6.17205 40.7909 6.77022 40.6271 7.571L39.8034 11.6666H38.4161L39.2832 7.3684C39.3314 7.1079 39.3554 6.89082 39.3554 6.71716C39.3554 6.21547 39.2109 5.83437 38.9219 5.57388C38.6425 5.30373 38.2186 5.16866 37.6502 5.16866C36.9373 5.16866 36.3496 5.37127 35.8872 5.77648C35.4344 6.1817 35.1261 6.79434 34.9623 7.61442L34.1531 11.6666H32.7658L34.2832 3.99644H35.6126L35.4248 4.95158C36.0992 4.26658 36.9855 3.92408 38.0838 3.92408C38.6811 3.92408 39.1917 4.03985 39.6156 4.2714C40.0395 4.50295 40.3477 4.84063 40.5404 5.28444C41.3208 4.37753 42.3612 3.92408 43.6618 3.92408Z" fill="white" />
            <path d="M53.3966 3.92408C54.0517 3.92408 54.6346 4.05915 55.1452 4.32929C55.6558 4.58978 56.0556 4.97088 56.3446 5.47257C56.6336 5.96462 56.7781 6.54832 56.7781 7.22368C56.7781 8.09199 56.5903 8.86865 56.2145 9.55366C55.8388 10.2387 55.3186 10.779 54.6538 11.1745C53.9987 11.5604 53.2617 11.7534 52.4428 11.7534C51.7877 11.7534 51.2241 11.6376 50.7521 11.4061C50.28 11.1649 49.9187 10.8175 49.6682 10.3641L48.859 14.4741H47.4717L49.5526 3.99644H50.8821L50.6943 4.95158C51.4072 4.26658 52.308 3.92408 53.3966 3.92408ZM52.385 10.5378C52.9534 10.5378 53.464 10.4027 53.9168 10.1325C54.3696 9.85275 54.7261 9.46683 54.9862 8.97478C55.2463 8.48274 55.3764 7.92315 55.3764 7.29604C55.3764 6.61103 55.1789 6.08039 54.7839 5.70412C54.3889 5.32785 53.8253 5.13972 53.0931 5.13972C52.5247 5.13972 52.0093 5.27961 51.5469 5.5594C51.0941 5.82955 50.7376 6.21064 50.4775 6.70269C50.227 7.19473 50.1018 7.75432 50.1018 8.38143C50.1018 9.05679 50.2993 9.58743 50.6943 9.97335C51.0989 10.3496 51.6625 10.5378 52.385 10.5378Z" fill="white" />
            <path d="M60.0244 0.928384H61.4117L59.2729 11.6666H57.8857L60.0244 0.928384Z" fill="white" />
            <path d="M65.5056 11.7534C64.7831 11.7534 64.152 11.6183 63.6125 11.3482C63.073 11.0684 62.6539 10.6776 62.3553 10.176C62.0566 9.67426 61.9073 9.09538 61.9073 8.43932C61.9073 7.58065 62.1 6.80882 62.4854 6.12381C62.8707 5.43881 63.4054 4.90334 64.0894 4.51743C64.7734 4.12186 65.5441 3.92408 66.4016 3.92408C67.1241 3.92408 67.7551 4.05915 68.2946 4.32929C68.8341 4.59943 69.2484 4.98535 69.5374 5.48705C69.8361 5.97909 69.9854 6.55797 69.9854 7.22368C69.9854 8.08235 69.7927 8.85901 69.4074 9.55366C69.022 10.2387 68.4873 10.779 67.8033 11.1745C67.1289 11.5604 66.363 11.7534 65.5056 11.7534ZM65.5923 10.5378C66.1607 10.5378 66.6713 10.4027 67.1241 10.1325C67.5865 9.85275 67.943 9.46683 68.1935 8.97478C68.4536 8.48274 68.5837 7.92315 68.5837 7.29604C68.5837 6.61103 68.3862 6.08039 67.9912 5.70412C67.5962 5.32785 67.0326 5.13972 66.3004 5.13972C65.732 5.13972 65.2214 5.27961 64.7686 5.5594C64.3158 5.82955 63.9594 6.21064 63.6992 6.70269C63.4391 7.19473 63.3091 7.75432 63.3091 8.38143C63.3091 9.05679 63.5066 9.58743 63.9015 9.97335C64.3062 10.3496 64.8698 10.5378 65.5923 10.5378Z" fill="white" />
            <path d="M79.1779 3.99644L73.7444 12.5059C73.253 13.2778 72.7858 13.8132 72.3426 14.1123C71.8994 14.4114 71.3744 14.561 70.7675 14.561C70.3917 14.561 70.0256 14.4982 69.6692 14.3728C69.3127 14.257 69.0381 14.093 68.8455 13.8808L69.568 12.8533C69.9148 13.2006 70.3484 13.3743 70.8686 13.3743C71.1962 13.3743 71.4852 13.2874 71.7357 13.1138C71.9862 12.9401 72.2463 12.6458 72.516 12.231L72.9062 11.6231L71.0565 3.99644H72.4438L73.9178 10.1325L77.7762 3.99644H79.1779Z" fill="white" />
            <path d="M80.0875 8.26566V8.35249C80.0875 9.06644 80.2898 9.61155 80.6945 9.98782C81.0991 10.3544 81.706 10.5378 82.5153 10.5378C82.9874 10.5378 83.4305 10.4606 83.8448 10.3062C84.2591 10.1422 84.6059 9.92511 84.8853 9.65496L85.4777 10.6535C85.102 11.0009 84.6444 11.271 84.1049 11.464C83.5654 11.6569 82.997 11.7534 82.3997 11.7534C81.6482 11.7534 80.9979 11.6183 80.4488 11.3482C79.8997 11.078 79.4758 10.6921 79.1771 10.1904C78.8785 9.68873 78.7291 9.10021 78.7291 8.42485C78.7291 7.56618 78.9122 6.79434 79.2783 6.10934C79.654 5.42433 80.1694 4.88887 80.8245 4.50295C81.4893 4.11703 82.2311 3.92408 83.05 3.92408C84.0905 3.92408 84.919 4.22316 85.5355 4.82134C86.1618 5.40986 86.4749 6.21547 86.4749 7.23815C86.4749 7.54688 86.4411 7.88939 86.3737 8.26566H80.0875ZM82.9922 5.08183C82.3082 5.08183 81.7205 5.27479 81.2292 5.66071C80.7378 6.04663 80.4055 6.57726 80.232 7.25262H85.1743C85.2128 6.56762 85.0298 6.03698 84.6251 5.66071C84.2301 5.27479 83.6858 5.08183 82.9922 5.08183Z" fill="white" />
            <path d="M90.208 5.13972C90.5451 4.71521 90.9594 4.40647 91.4507 4.21351C91.9421 4.02056 92.5394 3.92408 93.2427 3.92408L92.9825 5.26997C92.8958 5.26032 92.7754 5.25549 92.6213 5.25549C91.0317 5.25549 90.0683 6.11416 89.7311 7.8315L88.9652 11.6666H87.5779L89.0952 3.99644H90.4247L90.208 5.13972Z" fill="white" />
            <path d="M95.876 11.7534C95.2402 11.7534 94.6332 11.6714 94.0552 11.5074C93.4868 11.3434 93.0436 11.1311 92.7257 10.8706L93.3471 9.77074C93.6457 10.0119 94.0311 10.2049 94.5032 10.3496C94.9849 10.4847 95.4858 10.5522 96.0061 10.5522C96.6612 10.5522 97.1573 10.4557 97.4945 10.2628C97.8413 10.0602 98.0148 9.78039 98.0148 9.42341C98.0148 9.13397 97.8751 8.92654 97.5957 8.80112C97.3259 8.6757 96.902 8.55027 96.324 8.42485C95.7845 8.30907 95.3413 8.1933 94.9945 8.07752C94.6573 7.9521 94.3683 7.75914 94.1274 7.49864C93.8866 7.2285 93.7662 6.8667 93.7662 6.41325C93.7662 5.91156 93.9059 5.47257 94.1852 5.0963C94.4743 4.72003 94.8789 4.43059 95.3991 4.22799C95.929 4.02538 96.5408 3.92408 97.2344 3.92408C97.745 3.92408 98.2412 3.98679 98.7229 4.11221C99.2046 4.23763 99.5995 4.40647 99.9078 4.61873L99.3587 5.7186C99.06 5.51599 98.7132 5.36645 98.3182 5.26997C97.9232 5.16384 97.5186 5.11077 97.1043 5.11077C96.4781 5.11077 95.9964 5.2169 95.6592 5.42916C95.3221 5.63176 95.1535 5.90673 95.1535 6.25406C95.1535 6.56279 95.2932 6.7847 95.5725 6.91977C95.8519 7.04519 96.2855 7.17061 96.8731 7.29604C97.403 7.41181 97.8365 7.52759 98.1737 7.64336C98.5109 7.75914 98.7951 7.94727 99.0263 8.20777C99.2672 8.46826 99.3876 8.82041 99.3876 9.26422C99.3876 10.0457 99.0649 10.6584 98.4194 11.1022C97.7835 11.5363 96.9358 11.7534 95.876 11.7534Z" fill="white" />
          </svg>
        </div>

        <p className="font-extrabold font-Gilroy text-5xl mx-20 text-white">Find the best candidates for your organisation.</p>
        {/* <svg width="538" height="351" viewBox="0 0 538 351" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <rect width="538" height="351" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0_180_35" transform="translate(-0.0219331) scale(0.00165169 0.00253165)"/>
          </pattern>
          </defs>
        </svg> */}
        <img src={image} />

      </div>
      {/* <svg width="205" height="1020" viewBox="0 0 205 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M115.623 -1H205L65.2595 1020H0L115.623 -1Z" fill="#F57D7D"/>
      </svg> */}


      <div className="w-1/2 text-3xl flex justify-center items-center">
        {/* <div> */}
        <svg className="absolute top-[50px] right-[-7px]" width="87" height="80" viewBox="0 0 87 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM5.20842 50C5.20842 74.7377 25.2623 94.7916 50 94.7916C74.7377 94.7916 94.7916 74.7377 94.7916 50C94.7916 25.2623 74.7377 5.20842 50 5.20842C25.2623 5.20842 5.20842 25.2623 5.20842 50Z" fill="#62BECB" />
        </svg>
        <svg className="absolute top-[120px] right-[53px]" width="50" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM2.60421 25C2.60421 37.3689 12.6311 47.3958 25 47.3958C37.3689 47.3958 47.3958 37.3689 47.3958 25C47.3958 12.6311 37.3689 2.60421 25 2.60421C12.6311 2.60421 2.60421 12.6311 2.60421 25Z" fill="#F57D7D" />
        </svg>
        <svg className="absolute top-[150px] right-[90px]" width="50" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM2.60421 25C2.60421 37.3689 12.6311 47.3958 25 47.3958C37.3689 47.3958 47.3958 37.3689 47.3958 25C47.3958 12.6311 37.3689 2.60421 25 2.60421C12.6311 2.60421 2.60421 12.6311 2.60421 25Z" fill="#62BECB" />
        </svg>
        {/* </div> */}
        <div>
          <form className="text-[#0F4A7B]" onSubmit={onLogin}>
            <h3 className="mb-6 font-bold">Login</h3>
            <div className="mb-[14px]">
              <label className="text-[14px]" htmlFor="email">Email
                <input className="mt-[8px] rounded block w-[525px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='email' value={loginData.email} name='email' onChange={changeValue} />
              </label>
            </div>
            <div className="mb-[14px]">
              <label className="text-[14px]" htmlFor="phone">Password
                <input className="mt-[8px] rounded block w-[525px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='password' value={loginData.phone} name='password' onChange={changeValue} />
              </label>
            </div>
            <button className="font-bold text-[14px] px-[40px] rounded-lg bg-[#0F4A7B] text-white mt-[18px] h-[45px]" disabled={isDisabled()}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}