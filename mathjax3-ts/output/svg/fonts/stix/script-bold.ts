/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {CharMap, AddPaths} from '../../FontData.js';
import {scriptBold as font} from '../../../common/fonts/stix/script-bold.js';

export const scriptBold: CharMap = AddPaths(font, {
    0xA: '',
    0x20: '',
    0x41: '945 691l10 -17c-94 -182 -162 -342 -259 -569c32 9 51 17 80 33l21 -43c-35 -27 -89 -42 -127 -50l-18 -45h-147l18 41c-42 0 -90 10 -135 29c-53 -55 -114 -91 -187 -91c-92 0 -151 56 -151 131c0 51 37 91 84 91c44 0 70 -36 70 -70c0 -29 -23 -58 -63 -65v-1 c9 -18 32 -31 61 -31c43 0 88 24 131 64c-74 46 -131 117 -131 208c0 122 115 202 221 202c58 0 117 -25 161 -68c42 64 85 123 131 165c58 53 121 94 183 94c8 0 25 -2 47 -8zM809 610l-2 2c-65 -42 -110 -96 -188 -217c14 -24 25 -50 30 -79h2c49 103 105 208 158 294z M596 222c0 42 -7 77 -18 107c-40 -64 -72 -123 -146 -210c37 -15 78 -23 117 -23c19 38 33 69 45 97c2 9 2 22 2 29zM547 384c-36 45 -85 64 -126 64c-64 0 -128 -53 -128 -135c0 -74 36 -130 88 -166c63 72 115 154 166 237',
    0x42: '966 690l17 -45c-30 -12 -51 -24 -74 -39c43 -34 76 -72 76 -131c0 -63 -47 -129 -139 -148v-2c65 -31 94 -86 94 -131c0 -57 -33 -126 -103 -172c-35 -24 -77 -35 -129 -35c-83 0 -110 58 -110 95c0 47 36 121 156 136l8 -50c-58 -5 -97 -41 -97 -84 c0 -30 22 -42 45 -42c62 0 101 82 101 156c0 41 -12 81 -39 102c-15 -4 -37 -6 -54 -6c-13 0 -25 4 -35 6c-118 -226 -272 -321 -443 -321c-116 0 -185 54 -185 129c0 50 34 93 81 93c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1c17 -21 43 -31 77 -31 c104 0 185 47 301 248c89 156 150 247 265 320c-62 38 -123 42 -177 42c-176 0 -359 -79 -359 -237c0 -59 45 -98 100 -98c73 0 166 66 172 219h50c0 -133 -83 -274 -228 -274c-50 0 -98 10 -133 42c-30 27 -52 72 -52 118c0 104 79 186 178 233c83 40 179 52 263 52 c79 0 178 -14 252 -58c35 21 66 34 111 49zM871 480c0 29 -8 57 -26 77c-50 -49 -83 -102 -130 -189c16 -1 51 -4 71 -14c53 10 85 69 85 126',
    0x43: '487 668l-22 -45c-35 21 -85 21 -111 21c-91 0 -203 -38 -203 -140c0 -76 64 -115 116 -120c108 157 329 303 481 303c78 0 129 -22 129 -79c0 -123 -239 -287 -492 -289c-46 -70 -60 -129 -60 -179c0 -61 45 -106 107 -106c100 0 173 67 173 140c0 50 -34 70 -58 70 c-64 0 -109 -46 -125 -136l-50 8c13 110 91 183 202 183c87 0 145 -37 145 -110c0 -57 -44 -118 -103 -159c-54 -37 -127 -51 -198 -51c-125 0 -227 65 -227 181c0 55 12 108 44 167c-90 20 -175 76 -175 175c0 100 110 197 287 197c39 0 87 -2 140 -31zM414 375l1 -1 c123 2 371 107 371 221c0 22 -15 37 -46 37c-87 0 -235 -113 -326 -257',
    0x44: '889 613l17 -47c-31 -13 -44 -23 -69 -48c38 -60 61 -127 61 -194c0 -197 -175 -345 -355 -345c-64 0 -123 12 -169 28c-49 -16 -96 -24 -158 -24c-45 0 -81 4 -107 15c-32 13 -49 36 -49 63c0 29 20 51 51 65c25 11 56 16 91 16c78 0 132 -29 186 -57 c43 32 87 90 169 221c54 85 96 150 182 219c-61 80 -164 119 -266 119c-89 0 -154 -22 -204 -60s-85 -92 -85 -160c0 -77 47 -136 134 -136c90 0 188 59 189 246h50c1 -20 1 -24 1 -36c0 -184 -142 -268 -239 -268c-138 0 -226 70 -226 202c0 90 55 158 122 201 c77 49 171 66 252 66c137 0 256 -53 330 -133c39 26 48 32 92 47zM461 49v-2c20 -7 52 -13 78 -13c135 0 261 101 261 302c0 40 -7 75 -18 108h-1c-29 -43 -56 -99 -79 -144c-53 -104 -134 -198 -241 -251zM310 51v1c-41 27 -79 35 -115 35c-13 0 -44 -5 -44 -22 c0 -20 21 -27 64 -27c34 0 65 4 95 13',
    0x45: '414 683l-14 -48c-27 8 -45 9 -77 9c-83 0 -137 -38 -137 -95c0 -66 67 -90 148 -96c21 129 194 234 327 234c87 0 130 -25 130 -80c0 -80 -141 -188 -340 -209v-3c50 -6 80 -15 80 -37c0 -23 -23 -41 -72 -41c-25 0 -49 7 -63 14c-97 -33 -157 -111 -157 -196 c0 -59 43 -101 114 -101c88 0 168 52 168 136c0 43 -34 64 -59 64c-58 0 -104 -36 -129 -128l-49 10c24 114 92 173 206 173c98 0 145 -43 145 -116c0 -45 -23 -82 -53 -111c-59 -57 -156 -83 -234 -83c-129 0 -243 60 -243 177c0 101 85 186 239 224v2c-3 5 -6 11 -7 16 c-146 8 -242 65 -242 154c0 79 84 147 216 147c39 0 70 -2 103 -16zM456 455l2 -2c137 19 242 88 242 148c0 23 -14 31 -45 31c-76 0 -174 -90 -199 -177',
    0x46: '999 699l26 -42c-56 -49 -140 -87 -218 -87c-152 0 -253 74 -357 74c-116 0 -197 -67 -197 -152c0 -74 52 -101 92 -101c49 0 110 34 136 144l45 -9c-9 -115 -94 -190 -192 -190c-30 0 -60 7 -89 22c-47 25 -83 75 -83 137c0 73 46 125 118 163c60 32 138 41 229 41 c111 0 240 -38 346 -38c34 0 100 13 144 38zM718 558l35 -36c-29 -33 -41 -70 -72 -152c42 8 87 13 134 13c18 25 47 56 79 56c31 0 48 -22 48 -44c0 -40 -36 -73 -100 -81c0 -39 5 -64 8 -73l-70 -26c-3 11 -4 22 -4 34c0 18 2 30 6 50c-47 0 -91 -5 -133 -14 c-87 -219 -254 -306 -406 -306c-116 0 -178 54 -178 129c0 50 37 93 84 93c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1c11 -15 35 -31 80 -31c104 0 173 77 230 186c1 2 3 5 4 8c-68 -32 -118 -66 -140 -85l-35 36c36 34 116 97 227 144c83 145 131 192 193 235',
    0x47: '422 682l-14 -48c-28 8 -62 10 -84 10c-92 0 -151 -35 -151 -96c0 -52 47 -77 111 -91c98 143 259 230 381 230c81 0 134 -25 134 -85c0 -58 -61 -114 -150 -154c-73 -33 -165 -55 -259 -57c-15 -27 -30 -74 -30 -112c0 -34 12 -62 46 -62c92 0 132 33 262 151l39 -32 c-29 -27 -44 -68 -66 -127c-55 -152 -183 -230 -369 -230c-116 0 -188 54 -188 129c0 50 36 93 83 93c44 0 69 -33 69 -67c0 -29 -18 -61 -58 -68v-1c11 -15 41 -31 86 -31c99 0 172 47 229 145l-2 2c-28 -12 -70 -19 -102 -19c-93 0 -163 50 -163 134c0 25 7 67 27 105 c-103 23 -171 71 -171 147c0 86 100 151 235 151c40 0 70 -4 105 -17zM424 447v-1c153 9 284 73 284 147c0 24 -13 39 -43 39c-76 0 -176 -84 -241 -185',
    0x48: '816 658l-24 -19c-82 -65 -151 -138 -221 -274c17 4 76 21 89 27c151 198 312 307 417 307c50 0 77 -23 77 -63c0 -110 -157 -195 -343 -248c-94 -133 -167 -264 -167 -319c0 -19 10 -28 29 -28c29 0 68 27 146 124l42 -26c-39 -60 -75 -96 -111 -121 c-34 -23 -67 -36 -104 -36c-89 0 -122 51 -122 114c0 79 50 172 83 222c-22 -8 -58 -18 -73 -23c-78 -143 -222 -316 -365 -316c-64 0 -104 24 -104 77c0 45 26 86 61 119c61 58 146 90 260 130c50 80 84 147 212 262v2c-115 0 -141 75 -214 75c-54 0 -94 -51 -94 -99 c0 -52 30 -72 60 -72c20 0 39 6 57 23l29 -35c-27 -29 -58 -43 -106 -43c-85 0 -131 59 -131 127c0 73 63 154 189 154c106 0 168 -50 250 -50c23 0 49 2 79 13c22 8 42 19 69 37zM875 473v-2c69 17 190 82 190 156c0 12 -5 17 -18 17c-33 0 -112 -68 -172 -171zM344 225 l-1 2c-99 -31 -187 -109 -187 -173c0 -16 9 -20 20 -20c41 0 118 97 168 191',
    0x49: '141 66v-1c14 -18 62 -31 87 -31c113 0 209 40 296 231c6 12 11 25 18 38c-34 12 -59 30 -79 56c-22 27 -37 63 -37 108c0 54 27 105 60 137c63 60 154 83 237 83c48 0 95 -5 121 -9c34 16 68 21 81 21c31 0 52 -16 52 -35c0 -43 -38 -63 -93 -63c-10 0 -21 1 -32 3 c-59 -42 -92 -142 -136 -241l1 -2c38 18 81 52 120 115l43 -26c-26 -50 -85 -132 -195 -154c-35 -73 -73 -142 -122 -187c-93 -85 -194 -130 -328 -130c-116 0 -188 54 -188 129c0 50 37 93 84 93c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68zM769 604v3 c-186 0 -252 -80 -252 -166c0 -35 18 -66 54 -83c47 92 101 188 198 246',
    0x4A: '625 228l35 -36c-42 -46 -101 -79 -171 -104c-74 -156 -217 -312 -365 -312c-65 0 -105 34 -105 91c0 126 182 226 345 260c26 72 52 130 82 193c-33 8 -63 26 -83 52c-20 25 -30 59 -30 93c0 87 56 148 124 183c55 28 118 39 175 39c64 0 87 -6 122 -9 c31 21 61 21 78 21c34 0 54 -16 54 -35c0 -43 -39 -63 -92 -63c-11 0 -22 1 -33 3c-41 -32 -96 -126 -141 -222l2 -1c34 15 76 49 117 113l43 -25c-36 -72 -116 -149 -196 -156c-24 -55 -33 -85 -58 -137l3 -1c30 12 58 24 94 53zM678 605v2c-53 0 -116 0 -168 -24 c-48 -22 -86 -67 -86 -124c0 -45 20 -76 50 -85c50 93 117 166 204 231zM333 50l-1 1c-89 -25 -222 -115 -222 -191c0 -17 12 -29 29 -29c68 0 148 115 194 219',
    0x4B: '842 699l30 -41c-121 -85 -170 -180 -222 -278c15 0 32 -7 40 -12c26 12 61 42 115 118c97 139 178 213 250 213c51 0 75 -36 75 -68c0 -38 -29 -67 -66 -67s-60 21 -65 53h-2c-42 -131 -134 -247 -256 -280v-3c35 -20 49 -51 49 -84c0 -22 -7 -45 -18 -66 c-25 -46 -65 -92 -65 -116c0 -19 8 -27 26 -27c29 0 70 28 155 134l39 -33c-73 -103 -145 -160 -222 -160c-78 0 -119 42 -119 94c0 38 24 80 49 118c19 28 37 57 37 90c0 9 -10 27 -27 27h-21c-103 -254 -259 -332 -401 -332c-112 0 -178 54 -178 129c0 50 37 93 84 93 c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1c11 -15 25 -31 70 -31c86 0 166 83 218 186c71 141 116 233 244 336h-9c-119 0 -181 88 -243 88c-53 0 -110 -34 -110 -108c0 -51 29 -99 79 -99c34 0 49 8 81 48l38 -30c-31 -43 -72 -73 -134 -73c-97 0 -155 63 -155 152 c0 80 83 165 205 165c50 0 119 0 180 -36c35 -20 64 -27 79 -27c37 0 97 6 160 63',
    0x4C: '678 648l-22 -44c-72 40 -135 40 -166 40c-97 0 -201 -47 -201 -141c0 -90 98 -141 231 -141c12 0 25 0 44 2c28 57 48 96 83 148c54 78 161 167 258 167c78 0 110 -37 110 -87c0 -91 -141 -220 -320 -269c-60 -122 -148 -219 -254 -272v-2c34 -10 59 -13 78 -13 c87 0 186 39 278 141l36 -35c-94 -110 -201 -163 -311 -163c-82 0 -128 15 -168 29c-46 -14 -95 -25 -162 -25c-48 0 -83 4 -108 17c-28 14 -44 38 -44 61c0 25 17 47 44 62c26 14 60 21 100 21c75 0 130 -29 184 -57c51 34 104 106 168 220h-28c-140 0 -310 51 -310 200 c0 108 126 192 287 192c50 0 125 -8 193 -51zM722 389l2 -1c91 31 200 107 200 202c0 23 -17 34 -33 34c-62 0 -128 -125 -169 -235zM290 53v1c-41 27 -79 35 -115 35c-13 0 -44 -5 -44 -22c0 -20 21 -29 64 -29c34 0 65 6 95 15',
    0x4D: '1234 691l11 -17c-198 -305 -315 -544 -315 -606c0 -19 8 -27 26 -27c30 0 83 40 167 133l37 -34c-80 -96 -149 -158 -232 -158c-77 0 -119 31 -119 95c0 102 94 286 284 539l-2 1c-90 -62 -168 -163 -289 -379c-48 -85 -83 -148 -124 -188c-37 -36 -73 -54 -124 -54 c-42 0 -81 31 -81 76c0 32 12 75 35 121c76 154 177 301 259 414l-1 1c-99 -69 -164 -159 -253 -306c-70 -116 -121 -205 -175 -260c-39 -40 -80 -63 -137 -63c-82 0 -141 43 -141 118c0 51 37 91 84 91c44 0 70 -36 70 -70c0 -29 -18 -64 -63 -64v-1c13 -18 36 -19 61 -19 c66 0 105 57 210 229c92 151 163 250 231 317c86 86 163 119 235 119c15 0 24 -2 37 -8l10 -17c-141 -196 -276 -433 -322 -537c-5 -11 -19 -44 -19 -60c0 -5 2 -14 11 -14c43 0 120 147 145 194c66 124 147 249 231 334c65 66 134 108 201 108c11 0 40 -1 52 -8',
    0x4E: '695 175h4c38 50 64 107 85 165c36 101 67 247 133 316c26 28 48 43 89 43c48 0 72 -36 72 -68c0 -38 -31 -67 -66 -67c-30 0 -51 15 -64 39h-4c-43 -37 -67 -186 -127 -328c-47 -110 -125 -224 -209 -288h-51c15 80 14 171 18 310c2 60 12 151 28 215h-2 c-36 -57 -69 -120 -100 -183c-58 -117 -125 -236 -171 -284c-43 -45 -89 -66 -138 -66c-74 0 -132 45 -132 119c0 42 35 90 86 90c47 0 71 -35 71 -71c0 -23 -22 -62 -66 -62v-1c5 -10 23 -20 48 -20c79 0 147 111 246 308c69 138 117 226 173 284c29 31 65 51 101 68 l25 -22c-19 -54 -22 -174 -31 -297c-5 -68 -10 -146 -18 -200',
    0x4F: '749 562l-38 -9c-18 55 -86 91 -145 91c-179 0 -366 -240 -367 -481c0 -66 35 -129 106 -129c48 0 73 9 106 25c109 53 187 182 187 313c0 72 -39 127 -76 127c-58 0 -100 -66 -100 -139c0 -32 8 -65 26 -95l-44 -22c-35 57 -37 96 -37 126c0 110 76 195 182 195 c76 0 149 -55 149 -172c0 -182 -178 -413 -415 -413c-134 0 -211 94 -211 211c0 274 223 509 488 509c108 0 183 -64 189 -137',
    0x50: '914 698l19 -47c-21 -9 -39 -19 -55 -29c70 -46 116 -108 116 -183c0 -92 -64 -165 -170 -165c-45 0 -94 30 -94 81c0 33 13 55 29 71l41 -28c-12 -14 -15 -28 -15 -37c0 -22 20 -32 33 -32c36 0 62 42 62 100c0 59 -27 106 -67 140c-75 -78 -99 -179 -149 -274 c-124 -235 -260 -316 -424 -316c-116 0 -185 55 -185 130c0 50 34 92 81 92c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1c18 -22 49 -31 84 -31c114 0 170 51 279 248c80 145 147 253 241 328c-49 23 -104 34 -151 34c-197 0 -346 -99 -346 -225c0 -59 42 -98 92 -98 c74 0 140 56 149 208h50c0 -122 -55 -263 -210 -263c-95 0 -172 55 -172 157c0 86 65 174 175 226c69 33 156 50 255 50c80 0 158 -16 224 -45c30 17 62 32 98 44',
    0x51: '749 562l-38 -9c-18 55 -86 91 -145 91c-179 0 -366 -240 -367 -481c0 -66 35 -129 106 -129c52 0 77 11 115 29c-14 26 -31 29 -39 29c-17 0 -26 -2 -60 -29l-30 40c39 40 81 73 121 73c36 0 64 -10 93 -45c57 64 93 152 93 241c0 72 -29 127 -86 127 c-60 0 -90 -64 -90 -129c0 -35 10 -70 27 -95l-44 -22c-26 40 -38 83 -38 124c0 99 70 187 182 187c76 0 149 -55 149 -172c0 -106 -61 -229 -158 -313c14 -20 35 -48 51 -48c19 0 33 3 82 50l33 -34c-48 -63 -88 -99 -142 -99c-53 0 -84 16 -117 69 c-50 -23 -105 -38 -164 -38c-134 0 -211 94 -211 211c0 274 223 509 488 509c108 0 183 -64 189 -137',
    0x52: '934 175l39 -33c-73 -103 -139 -160 -224 -160c-78 0 -123 42 -123 94c0 71 85 135 85 191c0 13 -5 25 -14 27c-13 0 -25 2 -30 5c-120 -232 -262 -320 -427 -320c-116 0 -185 55 -185 130c0 50 34 92 81 92c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1 c18 -22 52 -31 87 -31c114 0 167 51 276 248c81 147 145 253 241 328c-49 23 -105 34 -151 34c-197 0 -346 -99 -346 -225c0 -59 44 -98 92 -98c44 0 82 12 113 66c19 32 32 76 35 133h50c0 -122 -56 -254 -211 -254c-90 0 -170 57 -170 157c0 86 65 173 175 225 c69 33 156 51 255 51c80 0 158 -16 224 -45c30 17 61 31 98 44l19 -47c-21 -9 -38 -18 -55 -29c55 -36 93 -87 93 -146c0 -93 -85 -153 -178 -161v-2c27 -27 34 -51 34 -86c0 -51 -78 -119 -78 -159c0 -19 8 -27 26 -27c29 0 74 28 159 134zM857 481c0 35 -15 65 -43 88 c-59 -60 -84 -133 -116 -202c22 0 44 -7 62 -18c51 9 97 74 97 132',
    0x53: '437 136l-49 -10c-17 108 -64 125 -107 125c-54 0 -86 -52 -86 -102c0 -49 49 -115 126 -115c82 0 163 48 163 163c0 113 -159 153 -159 285c0 148 162 217 281 217c77 0 175 -33 175 -122c0 -87 -110 -151 -201 -151v50c61 5 110 33 110 95c0 50 -44 73 -85 73 c-67 0 -152 -53 -152 -142c0 -125 165 -159 165 -292c0 -140 -134 -231 -303 -231c-121 0 -234 50 -234 168c0 104 98 159 194 159c88 0 149 -49 162 -170',
    0x54: '999 699l26 -42c-56 -49 -140 -87 -218 -87c-152 0 -253 74 -357 74c-116 0 -197 -72 -197 -157c0 -75 48 -107 101 -107c79 0 123 54 160 169l48 -12c-26 -136 -113 -212 -210 -212c-40 0 -76 5 -108 22c-47 25 -82 71 -82 133c0 73 46 140 118 178c60 32 138 41 229 41 c111 0 240 -38 346 -38c34 0 100 13 144 38zM718 558l35 -36c-63 -64 -76 -170 -111 -257c-26 -67 -63 -123 -108 -168c-84 -84 -194 -118 -290 -118c-117 0 -179 54 -179 129c0 50 37 93 84 93c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1c11 -15 35 -31 80 -31 c92 0 164 52 251 226c95 190 128 217 228 298',
    0x55: '904 669l-304 -563c-5 -10 -9 -24 -9 -36c0 -16 6 -29 23 -29c29 0 72 33 149 130l41 -33c-40 -59 -74 -93 -112 -120c-35 -25 -68 -36 -104 -36c-67 0 -106 29 -118 86h-1c-56 -70 -112 -89 -180 -89c-63 0 -113 35 -113 96c0 36 20 80 79 171l149 230 c20 30 30 62 30 89c0 45 -29 79 -97 79c-97 0 -186 -70 -186 -164c0 -41 24 -70 56 -70c57 0 86 38 111 104l48 -15c-20 -67 -72 -144 -166 -144c-33 0 -61 7 -84 21c-35 22 -56 60 -56 104c0 129 143 219 286 219c105 0 209 -50 209 -152c0 -32 -22 -76 -54 -128l-180 -291 c-8 -12 -24 -43 -24 -67c0 -19 9 -27 27 -27c27 0 63 26 98 66c80 90 166 246 200 307l147 262h135',
    0x56: '332 62l3 -4c174 105 249 222 332 349c121 185 191 292 283 292c57 0 74 -40 74 -68c0 -37 -27 -67 -64 -67c-33 0 -59 21 -66 53h-2c-38 -32 -91 -99 -168 -224c-96 -155 -187 -258 -262 -314c-77 -59 -149 -100 -228 -100c-8 0 -15 0 -66 9c150 145 115 357 349 564v4 c-48 0 -81 2 -119 17c-68 26 -86 71 -138 71c-54 0 -109 -35 -109 -109c0 -51 32 -87 72 -87c34 0 58 10 90 50l38 -32c-36 -41 -72 -73 -134 -73c-82 0 -157 52 -157 148c0 103 106 158 204 158c49 0 99 -1 160 -36c35 -20 64 -27 79 -27c37 0 97 5 160 63l36 -35 c-106 -112 -145 -191 -193 -309c-45 -110 -106 -218 -174 -293',
    0x57: '634 62l3 -4c130 71 229 222 312 349c121 185 191 292 283 292c57 0 74 -40 74 -68c0 -36 -26 -67 -63 -67c-35 0 -60 21 -67 53h-2c-38 -32 -91 -99 -168 -224c-127 -206 -288 -414 -470 -414c-16 0 -28 0 -58 9c56 50 91 109 160 285c7 19 26 63 44 103h-2 c-86 -137 -244 -397 -446 -397c-13 0 -27 0 -60 9c131 107 97 351 343 566v2c-48 0 -81 2 -119 17c-68 26 -86 71 -138 71c-54 0 -109 -35 -109 -109c0 -51 32 -87 72 -87c34 0 58 10 90 50l38 -32c-36 -41 -72 -73 -134 -73c-95 0 -157 59 -157 148c0 80 85 158 204 158 c49 0 99 -1 160 -36c35 -20 64 -27 79 -27c37 0 97 5 160 63l36 -35c-212 -207 -176 -381 -374 -602l2 -4c213 91 367 556 607 629c18 0 37 -4 49 -8c-171 -184 -167 -437 -349 -617',
    0x58: '664 567h2c41 59 102 132 203 132c70 0 141 -43 141 -119c0 -42 -33 -88 -84 -88c-47 0 -73 33 -73 69c0 23 22 62 66 62v1c-5 10 -23 20 -48 20c-82 0 -134 -63 -187 -193c-51 -125 -100 -276 -100 -339c0 -48 24 -71 50 -71c39 0 86 32 170 128l38 -30 c-77 -90 -155 -157 -239 -157c-89 0 -126 38 -158 105h-2c-59 -78 -139 -108 -228 -108c-70 0 -151 43 -151 119c0 42 35 90 86 90c47 0 71 -35 71 -71c0 -23 -22 -62 -66 -62v-1c5 -10 33 -20 58 -20c110 0 175 68 239 194c58 114 92 227 92 275c0 91 -24 141 -99 141 c-97 0 -191 -91 -191 -183c0 -49 26 -83 71 -83c50 0 72 29 98 79l44 -18c-35 -68 -73 -116 -157 -116c-82 0 -147 49 -147 144c0 72 60 140 118 180c57 39 111 52 169 52c111 0 187 -51 214 -132',
    0x59: '825 669h138c-165 -220 -268 -370 -360 -548l2 -1c23 11 60 32 100 64l35 -36c-63 -65 -128 -94 -178 -116c-64 -130 -196 -256 -353 -256c-55 0 -106 27 -106 83c0 59 44 107 105 137c63 31 145 43 229 62c16 34 38 70 56 101l-3 1c-38 -33 -82 -62 -145 -62 c-70 0 -113 34 -113 96c0 49 31 89 114 196c98 125 98 138 98 175c0 45 -39 79 -107 79c-97 0 -186 -70 -186 -164c0 -41 24 -70 56 -70c56 0 92 38 116 102l43 -12c-18 -67 -69 -145 -163 -145c-32 0 -61 5 -84 19c-37 22 -59 62 -59 106c0 129 143 219 286 219 c105 0 219 -50 219 -152c0 -59 -39 -103 -145 -247c-59 -80 -67 -100 -67 -122c0 -11 8 -21 23 -21c49 0 151 114 265 266zM396 -23l-1 1c-61 -12 -201 -50 -201 -121c0 -11 7 -26 29 -26c42 0 111 35 173 146',
    0x5A: '440 531l45 -22c-31 -63 -86 -117 -177 -117c-89 0 -155 50 -155 133c0 81 86 174 240 174c111 0 209 -27 278 -72c57 41 112 61 164 61c102 0 141 -43 141 -77c0 -35 -27 -87 -143 -87c-46 0 -85 14 -131 28c-54 -70 -80 -144 -106 -216c24 1 58 11 92 43l32 -33 c-40 -49 -91 -90 -157 -90c-5 -11 -10 -21 -15 -31c-33 -61 -76 -113 -127 -154c40 -15 82 -24 126 -24c68 0 179 28 217 132h50c-27 -125 -110 -200 -264 -200c-65 0 -116 5 -157 18c-20 7 -37 14 -52 22c-50 -23 -103 -37 -160 -37c-104 0 -131 42 -131 79 c0 25 15 47 42 62c25 14 61 21 100 21c47 0 96 -19 147 -40c11 14 22 29 32 47c20 37 35 77 56 128h-2c-18 0 -52 -3 -103 -44l-30 40c49 56 100 84 171 84c36 78 82 158 151 217c-73 35 -139 55 -225 55c-81 0 -145 -42 -145 -108c0 -52 34 -76 77 -76c44 0 83 22 119 84z M742 600v-2c18 -6 56 -19 90 -19c29 0 53 5 53 29c0 12 -12 25 -49 25c-30 0 -64 -6 -94 -33zM278 56c-31 18 -60 33 -97 33c-33 0 -40 -15 -40 -28c0 -15 22 -24 57 -24c27 0 54 6 80 19',
    0x61: '830 210l35 -29c-97 -126 -186 -192 -274 -192c-39 0 -70 13 -87 56c-65 -49 -105 -59 -163 -59c-74 0 -142 33 -142 124c0 38 9 76 24 111c-28 -11 -51 -18 -92 -18c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c98 0 151 56 172 81v-1c76 77 184 129 281 129 c36 0 112 0 142 -75l-41 -19c-27 38 -48 44 -88 44c-140 0 -281 -216 -281 -325c0 -34 19 -51 45 -51c38 0 98 25 133 72c-1 9 -1 18 -1 29c0 86 57 190 138 190c35 0 50 -20 50 -49c0 -61 -54 -144 -121 -191c8 -34 16 -48 49 -48c31 0 97 19 223 171',
    0x62: '92 541l31 36c37 -31 101 -69 137 -71c21 26 43 51 65 74c71 73 141 119 198 119c56 0 101 -29 101 -71c0 -60 -48 -118 -121 -154c-44 -21 -100 -35 -156 -35c-63 -86 -180 -288 -180 -370c0 -20 16 -33 33 -33c87 0 169 93 212 170c-17 30 -17 58 -17 81 c0 86 56 147 103 147c33 0 45 -21 45 -49c0 -49 -31 -122 -50 -154c15 -11 28 -14 48 -14c11 0 27 3 39 7l11 -44c-21 -9 -44 -13 -66 -13s-44 4 -60 13c-85 -124 -170 -194 -287 -194c-68 0 -118 40 -118 120c0 81 71 226 163 352c-40 12 -83 37 -131 83zM378 503l1 -2 c83 2 155 63 155 127c0 16 -9 21 -18 21c-28 0 -60 -23 -138 -146',
    0x63: '35 225l12 43c31 -13 53 -15 82 -15c84 0 135 39 161 68c75 81 173 141 268 141c65 0 125 -26 125 -83c0 -43 -26 -87 -73 -87c-39 0 -57 22 -57 50c0 39 39 40 39 59c0 8 -10 11 -17 11c-127 0 -261 -210 -261 -320c0 -40 21 -56 42 -56c61 0 145 33 275 192l34 -30 c-116 -148 -210 -212 -318 -212c-88 0 -148 46 -148 123c0 36 9 76 25 113c-28 -12 -51 -19 -93 -19c-32 0 -65 6 -96 22',
    0x64: '912 699l-323 -598c-4 -7 -11 -27 -11 -39s8 -23 16 -23c31 0 89 22 211 170l35 -29c-88 -120 -165 -191 -273 -191c-69 0 -92 34 -93 75h-2c-43 -46 -103 -78 -179 -78c-74 0 -125 44 -125 112c0 38 14 78 35 118c-25 -8 -44 -13 -79 -13c-32 0 -65 6 -96 22l12 43 c31 -13 53 -15 82 -15c78 0 124 35 154 63c53 52 112 99 181 127c33 13 72 19 103 19c35 0 67 -13 81 -39h2l145 276h124zM588 376c0 25 -14 36 -30 36c-44 0 -115 -44 -187 -146c-64 -91 -88 -152 -88 -193c0 -21 13 -37 30 -37c37 0 69 13 123 63c80 75 152 199 152 277',
    0x65: '35 284l29 35c35 -41 84 -61 133 -69c68 117 208 212 328 212c71 0 123 -33 123 -84c0 -24 -8 -50 -35 -78c-60 -64 -188 -103 -308 -106c-15 -14 -32 -61 -32 -100s22 -58 54 -58c71 0 195 88 267 176l32 -32c-50 -62 -116 -123 -189 -160c-42 -21 -86 -34 -135 -34 c-91 0 -144 49 -144 124c0 31 5 63 17 94c-51 11 -105 37 -140 80zM330 244l1 -1c142 16 219 86 219 147c0 20 -17 27 -26 27c-53 0 -120 -60 -194 -173',
    0x66: '25 -205l192 367c-12 20 -16 39 -16 59c0 57 52 116 131 152c112 219 190 326 310 326c69 0 107 -30 107 -73c0 -130 -194 -227 -300 -267l-117 -210c19 -9 37 -12 61 -12c36 0 85 8 137 54l27 -36c-61 -51 -118 -68 -177 -68c-29 0 -54 3 -75 9l-156 -301h-124zM483 432 l2 -2c81 39 174 112 174 189c0 24 -8 30 -26 30c-48 0 -131 -177 -150 -217',
    0x67: '771 449l-278 -518c21 -10 52 -12 73 -12c24 0 58 1 110 35l20 -41c-45 -33 -101 -44 -141 -44c-30 0 -63 5 -89 14c-63 -75 -152 -107 -238 -107c-84 0 -128 39 -128 77c0 46 53 82 100 100c39 15 92 15 121 15c16 0 50 -4 75 -8l40 72h-3c-44 -30 -87 -43 -143 -43 c-66 0 -117 43 -117 110c0 38 12 78 32 117c-24 -8 -48 -14 -82 -14c-32 0 -65 7 -96 23l12 43c31 -13 53 -16 82 -16c73 0 119 32 150 58c81 87 205 152 286 152c38 0 69 -10 88 -31h2l10 18h114zM591 375c0 30 -18 37 -33 37c-46 0 -110 -51 -187 -162 c-60 -86 -83 -138 -83 -176c0 -24 18 -35 30 -35c122 0 273 256 273 336zM369 -91c-20 6 -46 9 -63 9c-50 -1 -105 -17 -106 -62c0 -22 21 -30 40 -30c29 0 79 7 129 83',
    0x68: '722 214l36 -28c-93 -129 -188 -200 -283 -200c-57 0 -90 43 -90 83c0 33 10 78 46 129l108 151c7 10 17 25 17 43c0 9 -7 16 -20 16c-79 0 -211 -137 -327 -351l-31 -57h-123l249 458c-49 10 -106 34 -143 80l31 33c42 -39 108 -60 139 -64c77 144 132 192 224 192 c71 0 103 -37 103 -77c0 -116 -152 -166 -244 -173l-43 -79l3 -1c59 60 129 89 181 89c59 0 101 -25 101 -71c0 -30 -19 -69 -49 -117l-105 -171c-4 -6 -17 -27 -17 -43c0 -9 5 -20 17 -20c42 0 104 43 220 178zM442 509l1 -1c56 14 125 41 125 117c0 17 -11 24 -18 24 c-28 0 -43 -12 -108 -140',
    0x69: '534 633c0 -35 -28 -62 -64 -62s-63 28 -63 66c0 32 30 61 62 61c36 0 65 -29 65 -65zM450 205l36 -28c-99 -131 -157 -191 -249 -191c-61 0 -103 33 -103 92c0 57 28 104 68 178l49 91c-33 -18 -62 -29 -115 -29c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15 c98 0 151 56 172 81h118l-164 -315c-8 -15 -19 -45 -19 -69c0 -15 8 -29 21 -29c33 0 87 47 188 169',
    0x6A: '823 633c0 -35 -28 -62 -64 -62s-63 28 -63 66c0 32 30 61 62 61c36 0 65 -29 65 -65zM710 449l-276 -518c21 -10 52 -12 73 -12c24 0 58 1 110 35l20 -41c-45 -33 -101 -44 -141 -44c-30 0 -63 5 -89 14c-63 -75 -152 -107 -238 -107c-85 0 -128 38 -128 77 c0 46 53 82 100 100c39 15 92 15 121 15c16 0 50 -4 75 -8l207 387c-33 -18 -72 -29 -126 -29c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c98 0 161 56 182 81h112zM310 -91c-20 6 -46 9 -63 9c-50 -1 -105 -17 -106 -62c0 -22 21 -30 40 -30c29 0 79 7 129 83',
    0x6B: '694 209l36 -28c-101 -129 -169 -195 -261 -195c-55 0 -101 24 -101 72c0 54 37 72 37 121c0 18 -6 36 -47 39l18 45c111 11 184 73 184 125c0 20 -19 20 -23 20c-76 0 -210 -134 -328 -351l-31 -57h-123l249 458c-49 10 -96 34 -133 80l31 33c43 -40 99 -59 129 -64 c77 144 132 192 224 192c63 0 103 -31 103 -72c0 -115 -152 -171 -244 -178l-43 -79l3 -1c60 60 121 89 191 89c56 0 95 -32 95 -67c0 -64 -97 -135 -210 -154v-3c39 -26 55 -52 55 -81c0 -41 -33 -59 -33 -95c0 -8 7 -22 19 -22c31 0 93 35 203 173zM442 509l1 -1 c56 14 125 41 125 117c0 17 -11 24 -18 24c-28 0 -43 -12 -108 -140',
    0x6C: '43 429l26 38c40 -27 107 -51 128 -53c127 186 236 285 325 285c58 0 110 -25 110 -85c0 -77 -51 -147 -128 -194c-58 -36 -132 -59 -208 -65c-50 -84 -129 -215 -129 -286c0 -27 13 -33 25 -33c32 0 100 35 194 162l36 -27c-94 -132 -167 -185 -250 -185 c-68 0 -112 40 -112 121c0 70 49 172 103 255c-35 8 -96 43 -120 67zM333 421l1 -1c99 22 208 92 208 201c0 16 -5 28 -25 28c-57 0 -145 -155 -184 -228',
    0x6D: '1021 214l36 -28c-93 -129 -178 -200 -283 -200c-57 0 -90 43 -90 83c0 33 10 78 46 129l108 151c6 8 17 28 17 43c0 11 -6 20 -23 20c-79 0 -208 -141 -324 -355l-31 -57h-123l203 356c4 7 12 24 12 37c0 10 -5 19 -20 19c-79 0 -211 -141 -327 -355l-31 -57h-123 l187 347c-32 -18 -61 -29 -114 -29c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c98 0 151 56 172 81h114l-41 -79l3 -1c59 60 129 93 181 93c59 0 101 -26 101 -75c0 -5 -1 -11 -3 -18h3c59 60 130 93 182 93c59 0 104 -26 104 -75c0 -30 -19 -69 -49 -117l-105 -171 c-4 -6 -17 -27 -17 -43c0 -9 4 -20 16 -20c42 0 105 43 221 178',
    0x6E: '735 214l36 -28c-93 -129 -178 -200 -283 -200c-57 0 -90 43 -90 83c0 33 10 78 46 129l108 155c7 10 17 25 17 43c0 9 -7 16 -20 16c-79 0 -211 -141 -327 -355l-31 -57h-123l187 347c-32 -18 -61 -29 -114 -29c-32 0 -65 6 -96 22l12 43c31 -13 52 -15 81 -15 c98 0 152 56 173 81h114l-41 -79l3 -1c59 60 129 93 181 93c59 0 101 -26 101 -75c0 -30 -20 -70 -49 -117l-105 -171c-4 -6 -17 -27 -17 -43c0 -9 6 -20 18 -20c42 0 103 43 219 178',
    0x6F: '757 232l23 -39c-31 -21 -57 -31 -99 -31c-24 0 -45 3 -63 9c-41 -65 -92 -117 -143 -148c-43 -26 -86 -37 -131 -37c-83 0 -143 40 -143 124c0 38 9 76 24 113c-28 -13 -53 -20 -96 -20c-32 0 -63 6 -94 22l12 43c31 -13 51 -15 80 -15c87 0 137 43 163 71 c39 42 87 80 137 104c54 26 99 34 148 34c69 0 107 -41 107 -108c0 -42 -12 -89 -35 -131c9 -8 28 -11 38 -11c28 0 42 0 72 20zM626 371c0 26 -18 41 -47 41c-112 0 -263 -220 -263 -323c0 -39 19 -53 46 -53c85 0 163 88 209 162c-20 18 -30 50 -30 75c0 51 41 90 85 98',
    0x70: '453 370l3 -1c59 60 129 93 181 93c99 0 133 -50 133 -124c0 -100 -83 -223 -144 -266c43 -27 82 -65 111 -110l-37 -27c-44 50 -86 82 -123 101c-52 -34 -106 -50 -147 -50c-62 0 -87 23 -87 50c0 39 53 87 124 89c20 0 43 -2 65 -9c31 22 58 55 79 92 c28 49 44 105 44 150c0 33 -15 54 -47 54c-79 0 -200 -141 -317 -355l-143 -262h-123l299 551c-32 -17 -61 -28 -114 -28c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c98 0 151 56 172 81h114',
    0x71: '802 224l31 -31c-41 -44 -115 -115 -220 -213c-98 -91 -169 -171 -179 -185h-123l127 237h-2c-44 -30 -87 -46 -143 -46c-66 0 -117 43 -117 110c0 38 12 81 32 120c-24 -8 -43 -13 -77 -13c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c73 0 117 31 148 57 c81 87 202 152 283 152c38 0 69 -10 88 -31h2l10 18h121l-251 -467l1 -1zM594 376c0 25 -14 36 -30 36c-44 0 -115 -44 -187 -146c-64 -91 -86 -152 -86 -193c0 -21 12 -37 29 -37c37 0 68 13 122 63c80 75 152 199 152 277',
    0x72: '636 332l12 -43c-19 -10 -43 -14 -67 -14c-36 0 -72 10 -88 28l-248 -192l-59 -111h-123l187 347c-32 -18 -61 -29 -114 -29c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c98 0 151 56 172 81h120l-113 -211l1 -1l150 112c-1 7 -2 13 -2 19c0 59 52 94 104 94 c45 0 60 -12 73 -28l-101 -90c14 -16 37 -19 58 -19c13 0 34 4 40 7',
    0x73: '139 240l-19 41c55 22 118 47 184 127c-6 8 -13 45 -13 52c0 80 61 97 85 97c35 0 50 -27 50 -52c0 -30 -15 -78 -49 -108c31 -45 72 -82 72 -171c0 -81 -55 -161 -125 -205c-42 -26 -85 -35 -140 -35c-60 0 -133 28 -133 97c0 49 34 83 67 83c23 0 59 -12 59 -46 c0 -44 -35 -31 -35 -58c0 -12 9 -26 35 -26c79 0 157 88 157 242c0 24 -5 48 -9 71c-57 -57 -129 -90 -186 -109',
    0x74: '612 538l-22 -50h-145l-185 -354c-6 -12 -20 -45 -20 -69c0 -15 5 -29 21 -29c36 0 92 56 194 178l36 -28c-102 -132 -161 -200 -254 -200c-64 0 -97 35 -97 92s23 103 62 177l32 61h-2c-52 -48 -117 -60 -181 -66l-4 46c109 9 209 80 258 153l21 39h-101l22 50h102 l70 131h120l-69 -131h142',
    0x75: '726 208l36 -28c-99 -128 -145 -191 -255 -191c-56 0 -92 38 -92 85v8h-1c-46 -50 -94 -96 -184 -96c-57 0 -100 34 -100 96c0 37 14 85 46 143l66 122c-33 -18 -62 -29 -115 -29c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c98 0 151 56 172 81h120l-163 -308 c-7 -13 -24 -51 -24 -78c0 -16 6 -27 23 -27c91 0 212 170 326 413h120l-166 -318c-9 -17 -18 -42 -18 -62c0 -16 6 -30 23 -30c33 0 87 47 188 169',
    0x76: '659 224l11 -44c-19 -9 -47 -13 -60 -13c-33 0 -49 2 -70 13c-86 -125 -171 -194 -285 -194c-67 0 -113 36 -113 105c0 44 26 105 59 165l49 90c-32 -17 -61 -28 -114 -28c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c98 0 151 56 172 81h118l-161 -307 c-6 -11 -21 -46 -21 -73c0 -18 16 -33 33 -33c87 0 169 93 212 170c-17 30 -23 67 -23 91c0 94 49 161 107 161c37 0 47 -28 47 -73c0 -48 -25 -117 -50 -154c15 -11 32 -14 52 -14c11 0 27 3 39 7',
    0x77: '939 224l11 -44c-19 -9 -47 -13 -60 -13c-33 0 -49 2 -70 13c-86 -125 -171 -194 -285 -194c-62 0 -106 33 -113 92h-1c-56 -55 -98 -92 -183 -92c-57 0 -99 34 -99 96c0 37 14 85 46 143l66 122c-33 -18 -62 -29 -115 -29c-32 0 -65 6 -96 22l12 43 c31 -13 53 -15 82 -15c98 0 151 56 172 81h120l-164 -308c-14 -26 -23 -50 -23 -75c0 -15 9 -30 22 -30c91 0 209 170 323 413h120l-162 -307c-6 -11 -20 -46 -20 -73c0 -18 16 -33 33 -33c87 0 169 93 212 170c-17 30 -23 67 -23 91c0 92 49 161 107 161 c37 0 47 -28 47 -73c0 -48 -25 -117 -50 -154c15 -11 32 -14 52 -14c11 0 27 3 39 7',
    0x78: '140 234l-38 29c121 150 199 196 288 196c52 0 80 -26 99 -55c50 50 107 58 139 58c67 0 112 -31 112 -88c0 -47 -30 -85 -76 -85c-25 0 -51 14 -51 48c0 43 36 35 36 58c0 14 -14 17 -24 17c-115 0 -202 -282 -202 -340c0 -24 14 -33 30 -33c48 0 133 45 239 177l35 -30 c-65 -83 -130 -144 -196 -175c-33 -15 -64 -22 -99 -22c-46 0 -89 9 -109 55c-53 -42 -100 -58 -146 -58c-75 0 -114 43 -114 97c0 42 29 81 74 81c24 0 53 -14 53 -48c0 -45 -36 -34 -36 -61c0 -11 13 -19 25 -19c111 0 217 268 217 329c0 34 -15 44 -31 44 c-49 0 -102 -27 -225 -175',
    0x79: '711 449l-272 -518c21 -10 52 -12 73 -12c24 0 58 0 110 34l20 -40c-45 -33 -101 -44 -141 -44c-30 0 -63 5 -89 14c-63 -75 -151 -107 -238 -107c-84 0 -128 39 -128 77c0 46 53 82 100 100c39 15 92 15 121 15c16 0 50 -4 75 -8l45 85h-2c-41 -37 -79 -59 -147 -59 c-57 0 -100 34 -100 96c0 37 15 85 47 143l66 122c-33 -18 -62 -29 -115 -29c-32 0 -65 6 -96 22l12 43c31 -13 53 -15 82 -15c98 0 151 56 172 81h120l-164 -308c-14 -26 -24 -50 -24 -75c0 -15 10 -30 23 -30c91 0 216 170 330 413h120zM315 -91c-20 6 -46 9 -63 9 c-50 -1 -105 -17 -106 -62c0 -22 21 -30 40 -30c29 0 79 7 129 83',
    0x7A: '665 224l37 -26c-34 -48 -64 -88 -93 -118c-64 -67 -120 -91 -190 -91c-61 0 -76 29 -76 55c0 32 25 43 25 68c0 8 -7 13 -20 13c-32 0 -61 -22 -117 -66c-45 -58 -92 -73 -127 -73c-31 0 -43 18 -43 36c0 45 59 94 150 111l230 189v1c-19 -5 -38 -7 -57 -7 c-39 0 -74 9 -89 16c-56 -67 -121 -97 -200 -108l-12 39c50 12 110 26 158 84c-26 17 -45 43 -45 72c0 45 31 74 74 74c42 0 65 -30 65 -60c0 -18 -1 -31 -10 -52c22 -11 49 -15 76 -15c34 0 69 7 95 20c30 46 67 77 118 77c26 0 47 -12 47 -36c0 -13 -8 -31 -23 -45 c-23 -21 -62 -37 -105 -47l-196 -162l1 -1c14 2 29 3 38 3c66 0 103 -29 103 -61c0 -27 -21 -45 -21 -61c0 -9 6 -12 13 -12c37 0 119 66 194 183',
    0xA0: '',
    0x210A: '771 449l-278 -518c21 -10 52 -12 73 -12c24 0 58 1 110 35l20 -41c-45 -33 -101 -44 -141 -44c-30 0 -63 5 -89 14c-63 -75 -152 -107 -238 -107c-84 0 -128 39 -128 77c0 46 53 82 100 100c39 15 92 15 121 15c16 0 50 -4 75 -8l40 72h-3c-44 -30 -87 -43 -143 -43 c-66 0 -117 43 -117 110c0 38 12 78 32 117c-24 -8 -48 -14 -82 -14c-32 0 -65 7 -96 23l12 43c31 -13 53 -16 82 -16c73 0 119 32 150 58c81 87 205 152 286 152c38 0 69 -10 88 -31h2l10 18h114zM591 375c0 30 -18 37 -33 37c-46 0 -110 -51 -187 -162 c-60 -86 -83 -138 -83 -176c0 -24 18 -35 30 -35c122 0 273 256 273 336zM369 -91c-20 6 -46 9 -63 9c-50 -1 -105 -17 -106 -62c0 -22 21 -30 40 -30c29 0 79 7 129 83',
    0x210B: '816 658l-24 -19c-82 -65 -151 -138 -221 -274c17 4 76 21 89 27c151 198 312 307 417 307c50 0 77 -23 77 -63c0 -110 -157 -195 -343 -248c-94 -133 -167 -264 -167 -319c0 -19 10 -28 29 -28c29 0 68 27 146 124l42 -26c-39 -60 -75 -96 -111 -121 c-34 -23 -67 -36 -104 -36c-89 0 -122 51 -122 114c0 79 50 172 83 222c-22 -8 -58 -18 -73 -23c-78 -143 -222 -316 -365 -316c-64 0 -104 24 -104 77c0 45 26 86 61 119c61 58 146 90 260 130c50 80 84 147 212 262v2c-115 0 -141 75 -214 75c-54 0 -94 -51 -94 -99 c0 -52 30 -72 60 -72c20 0 39 6 57 23l29 -35c-27 -29 -58 -43 -106 -43c-85 0 -131 59 -131 127c0 73 63 154 189 154c106 0 168 -50 250 -50c23 0 49 2 79 13c22 8 42 19 69 37zM875 473v-2c69 17 190 82 190 156c0 12 -5 17 -18 17c-33 0 -112 -68 -172 -171zM344 225 l-1 2c-99 -31 -187 -109 -187 -173c0 -16 9 -20 20 -20c41 0 118 97 168 191',
    0x2110: '141 66v-1c14 -18 62 -31 87 -31c113 0 209 40 296 231c6 12 11 25 18 38c-34 12 -59 30 -79 56c-22 27 -37 63 -37 108c0 54 27 105 60 137c63 60 154 83 237 83c48 0 95 -5 121 -9c34 16 68 21 81 21c31 0 52 -16 52 -35c0 -43 -38 -63 -93 -63c-10 0 -21 1 -32 3 c-59 -42 -92 -142 -136 -241l1 -2c38 18 81 52 120 115l43 -26c-26 -50 -85 -132 -195 -154c-35 -73 -73 -142 -122 -187c-93 -85 -194 -130 -328 -130c-116 0 -188 54 -188 129c0 50 37 93 84 93c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68zM769 604v3 c-186 0 -252 -80 -252 -166c0 -35 18 -66 54 -83c47 92 101 188 198 246',
    0x2112: '678 648l-22 -44c-72 40 -135 40 -166 40c-97 0 -201 -47 -201 -141c0 -90 98 -141 231 -141c12 0 25 0 44 2c28 57 48 96 83 148c54 78 161 167 258 167c78 0 110 -37 110 -87c0 -91 -141 -220 -320 -269c-60 -122 -148 -219 -254 -272v-2c34 -10 59 -13 78 -13 c87 0 186 39 278 141l36 -35c-94 -110 -201 -163 -311 -163c-82 0 -128 15 -168 29c-46 -14 -95 -25 -162 -25c-48 0 -83 4 -108 17c-28 14 -44 38 -44 61c0 25 17 47 44 62c26 14 60 21 100 21c75 0 130 -29 184 -57c51 34 104 106 168 220h-28c-140 0 -310 51 -310 200 c0 108 126 192 287 192c50 0 125 -8 193 -51zM722 389l2 -1c91 31 200 107 200 202c0 23 -17 34 -33 34c-62 0 -128 -125 -169 -235zM290 53v1c-41 27 -79 35 -115 35c-13 0 -44 -5 -44 -22c0 -20 21 -29 64 -29c34 0 65 6 95 15',
    0x211B: '934 175l39 -33c-73 -103 -139 -160 -224 -160c-78 0 -123 42 -123 94c0 71 85 135 85 191c0 13 -5 25 -14 27c-13 0 -25 2 -30 5c-120 -232 -262 -320 -427 -320c-116 0 -185 55 -185 130c0 50 34 92 81 92c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1 c18 -22 52 -31 87 -31c114 0 167 51 276 248c81 147 145 253 241 328c-49 23 -105 34 -151 34c-197 0 -346 -99 -346 -225c0 -59 44 -98 92 -98c44 0 82 12 113 66c19 32 32 76 35 133h50c0 -122 -56 -254 -211 -254c-90 0 -170 57 -170 157c0 86 65 173 175 225 c69 33 156 51 255 51c80 0 158 -16 224 -45c30 17 61 31 98 44l19 -47c-21 -9 -38 -18 -55 -29c55 -36 93 -87 93 -146c0 -93 -85 -153 -178 -161v-2c27 -27 34 -51 34 -86c0 -51 -78 -119 -78 -159c0 -19 8 -27 26 -27c29 0 74 28 159 134zM857 481c0 35 -15 65 -43 88 c-59 -60 -84 -133 -116 -202c22 0 44 -7 62 -18c51 9 97 74 97 132',
    0x212C: '966 690l17 -45c-30 -12 -51 -24 -74 -39c43 -34 76 -72 76 -131c0 -63 -47 -129 -139 -148v-2c65 -31 94 -86 94 -131c0 -57 -33 -126 -103 -172c-35 -24 -77 -35 -129 -35c-83 0 -110 58 -110 95c0 47 36 121 156 136l8 -50c-58 -5 -97 -41 -97 -84 c0 -30 22 -42 45 -42c62 0 101 82 101 156c0 41 -12 81 -39 102c-15 -4 -37 -6 -54 -6c-13 0 -25 4 -35 6c-118 -226 -272 -321 -443 -321c-116 0 -185 54 -185 129c0 50 34 93 81 93c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1c17 -21 43 -31 77 -31 c104 0 185 47 301 248c89 156 150 247 265 320c-62 38 -123 42 -177 42c-176 0 -359 -79 -359 -237c0 -59 45 -98 100 -98c73 0 166 66 172 219h50c0 -133 -83 -274 -228 -274c-50 0 -98 10 -133 42c-30 27 -52 72 -52 118c0 104 79 186 178 233c83 40 179 52 263 52 c79 0 178 -14 252 -58c35 21 66 34 111 49zM871 480c0 29 -8 57 -26 77c-50 -49 -83 -102 -130 -189c16 -1 51 -4 71 -14c53 10 85 69 85 126',
    0x212F: '35 284l29 35c35 -41 84 -61 133 -69c68 117 208 212 328 212c71 0 123 -33 123 -84c0 -24 -8 -50 -35 -78c-60 -64 -188 -103 -308 -106c-15 -14 -32 -61 -32 -100s22 -58 54 -58c71 0 195 88 267 176l32 -32c-50 -62 -116 -123 -189 -160c-42 -21 -86 -34 -135 -34 c-91 0 -144 49 -144 124c0 31 5 63 17 94c-51 11 -105 37 -140 80zM330 244l1 -1c142 16 219 86 219 147c0 20 -17 27 -26 27c-53 0 -120 -60 -194 -173',
    0x2130: '414 683l-14 -48c-27 8 -45 9 -77 9c-83 0 -137 -38 -137 -95c0 -66 67 -90 148 -96c21 129 194 234 327 234c87 0 130 -25 130 -80c0 -80 -141 -188 -340 -209v-3c50 -6 80 -15 80 -37c0 -23 -23 -41 -72 -41c-25 0 -49 7 -63 14c-97 -33 -157 -111 -157 -196 c0 -59 43 -101 114 -101c88 0 168 52 168 136c0 43 -34 64 -59 64c-58 0 -104 -36 -129 -128l-49 10c24 114 92 173 206 173c98 0 145 -43 145 -116c0 -45 -23 -82 -53 -111c-59 -57 -156 -83 -234 -83c-129 0 -243 60 -243 177c0 101 85 186 239 224v2c-3 5 -6 11 -7 16 c-146 8 -242 65 -242 154c0 79 84 147 216 147c39 0 70 -2 103 -16zM456 455l2 -2c137 19 242 88 242 148c0 23 -14 31 -45 31c-76 0 -174 -90 -199 -177',
    0x2131: '999 699l26 -42c-56 -49 -140 -87 -218 -87c-152 0 -253 74 -357 74c-116 0 -197 -67 -197 -152c0 -74 52 -101 92 -101c49 0 110 34 136 144l45 -9c-9 -115 -94 -190 -192 -190c-30 0 -60 7 -89 22c-47 25 -83 75 -83 137c0 73 46 125 118 163c60 32 138 41 229 41 c111 0 240 -38 346 -38c34 0 100 13 144 38zM718 558l35 -36c-29 -33 -41 -70 -72 -152c42 8 87 13 134 13c18 25 47 56 79 56c31 0 48 -22 48 -44c0 -40 -36 -73 -100 -81c0 -39 5 -64 8 -73l-70 -26c-3 11 -4 22 -4 34c0 18 2 30 6 50c-47 0 -91 -5 -133 -14 c-87 -219 -254 -306 -406 -306c-116 0 -178 54 -178 129c0 50 37 93 84 93c44 0 68 -33 68 -67c0 -29 -18 -61 -58 -68v-1c11 -15 35 -31 80 -31c104 0 173 77 230 186c1 2 3 5 4 8c-68 -32 -118 -66 -140 -85l-35 36c36 34 116 97 227 144c83 145 131 192 193 235',
    0x2133: '1234 691l11 -17c-198 -305 -315 -544 -315 -606c0 -19 8 -27 26 -27c30 0 83 40 167 133l37 -34c-80 -96 -149 -158 -232 -158c-77 0 -119 31 -119 95c0 102 94 286 284 539l-2 1c-90 -62 -168 -163 -289 -379c-48 -85 -83 -148 -124 -188c-37 -36 -73 -54 -124 -54 c-42 0 -81 31 -81 76c0 32 12 75 35 121c76 154 177 301 259 414l-1 1c-99 -69 -164 -159 -253 -306c-70 -116 -121 -205 -175 -260c-39 -40 -80 -63 -137 -63c-82 0 -141 43 -141 118c0 51 37 91 84 91c44 0 70 -36 70 -70c0 -29 -18 -64 -63 -64v-1c13 -18 36 -19 61 -19 c66 0 105 57 210 229c92 151 163 250 231 317c86 86 163 119 235 119c15 0 24 -2 37 -8l10 -17c-141 -196 -276 -433 -322 -537c-5 -11 -19 -44 -19 -60c0 -5 2 -14 11 -14c43 0 120 147 145 194c66 124 147 249 231 334c65 66 134 108 201 108c11 0 40 -1 52 -8',
    0x2134: '757 232l23 -39c-31 -21 -57 -31 -99 -31c-24 0 -45 3 -63 9c-41 -65 -92 -117 -143 -148c-43 -26 -86 -37 -131 -37c-83 0 -143 40 -143 124c0 38 9 76 24 113c-28 -13 -53 -20 -96 -20c-32 0 -63 6 -94 22l12 43c31 -13 51 -15 80 -15c87 0 137 43 163 71 c39 42 87 80 137 104c54 26 99 34 148 34c69 0 107 -41 107 -108c0 -42 -12 -89 -35 -131c9 -8 28 -11 38 -11c28 0 42 0 72 20zM626 371c0 26 -18 41 -47 41c-112 0 -263 -220 -263 -323c0 -39 19 -53 46 -53c85 0 163 88 209 162c-20 18 -30 50 -30 75c0 51 41 90 85 98',
},{
});
