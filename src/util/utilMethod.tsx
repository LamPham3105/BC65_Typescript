import * as jwtDecode from "jwt-decode";

const TOKEN_AUTHOR = "accessToken";
const USER_LOGIN = "userLogin";
const BOOK = "Book";
const TOKEN_WEB =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NSIsIkhldEhhblN0cmluZyI6IjI1LzExLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczMjQ5MjgwMDAwMCIsIm5iZiI6MTcwMjMxNDAwMCwiZXhwIjoxNzMyNjQwNDAwfQ._Cum2zMqV8nsbUfpCOe0ILWE_GvP8V8FQnmOR8PRB44";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const numberRegExp = /^[0-9]+$/;

const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const wordRegExp =
  /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;

const passRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

const birthRegExp = /^\d{4}-\d{2}-\d{2}$/;

const getDataTextStorage = (storeName: string) => {
  if (localStorage.getItem(storeName)) {
    return localStorage.getItem(storeName);
  }
  return null;
};

const getDataJsonStorage = (storeName: string) => {
  if (localStorage.getItem(storeName)) {
    return JSON.parse(localStorage.getItem(storeName) as string);
  }
  return null;
};

const setDataTextStorage = (storeName: string, data: string) => {
  localStorage.setItem(storeName, data);
};

const setDataJsonStorage = (storeName: string, data: any) => {
  localStorage.setItem(storeName, JSON.stringify(data));
};

const removeDataTextStorage = (storeName: string) => {
  localStorage.removeItem(storeName);
};

const removeDataJsonStorage = (storeName: string) => {
  localStorage.removeItem(storeName);
};

// Các hàm để thao tác với cookie
function setCookie(name: string, value: string, days: number) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name: string) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function delCookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

const convertDateAndTime = (dateTimeString: string): string => {
  if (!dateTimeString) {
    return "";
  }
  const dateTime = new Date(dateTimeString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    hour12: true, // Use 12-hour format
  };

  return dateTime.toLocaleString("en-US", options);
};

function isTokenExpired(token: string) {
  try {
    const decodedToken = jwtDecode.jwtDecode(token);
    const expirationTime = new Date((decodedToken.exp ?? 0) * 1000);
    const currentTime = new Date();
    return expirationTime < currentTime;
  } catch (error) {
    return true;
  }
}

const isOver18 = (dateOfBirth: string) => {
  if (!dateOfBirth) return false;
  const today = new Date();
  const dob = new Date(dateOfBirth);
  const age = today.getFullYear() - dob.getFullYear();
  const month = today.getMonth() - dob.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
    return age - 1 >= 18;
  }
  return age >= 18;
};

export {
  phoneRegExp,
  numberRegExp,
  emailRegExp,
  passRegExp,
  wordRegExp,
  birthRegExp,
  isOver18,
  setCookie,
  getCookie,
  delCookie,
  getDataTextStorage,
  getDataJsonStorage,
  setDataTextStorage,
  setDataJsonStorage,
  removeDataTextStorage,
  removeDataJsonStorage,
  TOKEN_AUTHOR,
  USER_LOGIN,
  BOOK,
  TOKEN_WEB,
  convertDateAndTime,
  isTokenExpired,
};
