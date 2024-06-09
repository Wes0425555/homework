     // 用來添加結果到網頁的函數
        function addToPage(content) {
            document.getElementById("result").innerHTML += content + "<br>";
        }

        // (1) 計算2的10次方
        addToPage("2的10次方是: " + Math.pow(2, 10));

        // (2) 計算100除以7的商和餘數
        addToPage("100除以7的商和餘數是: " + Math.floor(100 / 7) + ", " + (100 % 7));

        // (3) 計算10除以3的商，保留2位小數
        addToPage("10除以3的商(保留2位小數)是: " + (10 / 3).toFixed(2));

        // (4) 字符串"5"轉換成數字然後乘以10
        addToPage('"5"轉換成數字然後乘以10是: ' + (Number("5") * 10));

        // (5) 判斷當前的小時是否大於等於7
        addToPage("當前的小時是否大於等於7: " + (new Date().getHours() >= 7));

        // (6) 將字符串"hello"與字符串"world"連接起來
        addToPage('"hello"與"world"連接起來是: ' + ("hello" + "world"));

        // (7) 判斷字符串123是否為數字
        addToPage('"123"是否為數字: ' + (!isNaN("123")));

        // (8) 判斷字符串"4"轉換成數字之後，是否小於數字"2"
        addToPage('"4"轉換成數字之後是否小於"2": ' + (Number("4") < Number("2")));

        // (9) 判斷數字15是否在10到20之間（包括10和20）
        addToPage("數字15是否在10到20之間（包括10和20）: " + (15 >= 10 && 15 <= 20));

        // (10) 判斷字符串"hello"是否不為undefined且不為null
        addToPage('"hello"是否不為undefined且不為null: ' + (typeof "hello" !== 'undefined' && "hello" !== null));

        // (11) 將數字25除以2，判斷結果是否為偶數
        addToPage("數字25除以2的結果是否為偶數: " + (25 % 2 === 0 ? "是偶數" : "是奇數"));

        // (12) 比較兩個數字x和y的大小
        let x = 5, y = 10; // 假設的x和y值
        addToPage("比較兩個數字x和y的大小: " + (x > y ? "x是較大的" : "y是較大的"));
