// 문제 59 : cjs 방식과 esm 방식의 차이점을 설명하세요.

// cjs 방식은 commonjs 방식으로 모듈을 불러오는 방식
// esm 방식은 import from으로 모듈을 불러오는 방식
// 둘의 가장 큰 차이점은 cjs는 구버전의 방식으로 현 브라우저의 최신 버전에 호환이 되지 않는 경우가 존재하는 반면
// esm 방식은 최선 버전에 호환이 되기 때문에 ems 방식을 사용한다.

// cjs
const http = require('http');

// esm
import http from 'http';