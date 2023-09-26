"use strict"
import * as helps from "./ready-functions.js";

if (document.readyState == 'loading') {
  
  // ещё загружается, ждём события
  document.addEventListener('DOMContentLoaded', helps.maskPhone());
}