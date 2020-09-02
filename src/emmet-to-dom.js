// Emmet文からDOMを生成
// VSCodeでは動かないelem>(elem)^elem (かっこで囲まれた要素[群]の直後にキャレット^)でも動く
// 極端な例 section>h1#article-title{タイトル}+a[href]*2p^ul>(li#toc_list$*2>a[href="sec$*3" class="toc"])^p.talker$*2*5.end
//
// 下のDOMを生成することが目標
// <section>
//     <h1 id="article-title">タイトル</h1>
//     <a href></a>
//     <a href></a>
//     <p></p>
// </section>
// <ul>
//     <li id="toc_list1">
//         <a href="sec1" class="toc"></a>
//         <a href="sec2" class="toc"></a>
//         <a href="sec3" class="toc"></a>
//     </li>
//     <li id="toc_list2">
//         <a href="sec1" class="toc"></a>
//         <a href="sec2" class="toc"></a>
//         <a href="sec3" class="toc"></a>
//     </li>
// </ul>
// <p class="talker1"></p>
// <p class="talker2"></p>
// <p class="talker1"></p>
// <p class="talker2"></p>
// <div class="end"></div>
//
// emmet.match(/[\w-]+|\W/g)で。分子に分解
// ['section', '>', 'h1', '#', 'article-title', '{', 'タ', '>', 'イ', '＝', 'ト', ')', 'ル', '}', '+', 'a', '[', 'href', ']', '*', '2p', '^', 'ul', '>', '(', 'li', '#', 'toc_list', '$', '*', '2', '>', 'a', '[', 'href', '=', '"', 'sec', '$', '*', '3', '"', ' ', 'class', '=', '"', 'toc', '"', ']', ')', '^', 'p', '.', 'talker', '$', '*', '2', '*', '5', '.', 'end']
//
// 中に任意の文字を入れられる{}""''の中をまとめる
// ['section', '>', 'h1', '#', 'article-title', '{', 'タ>イ＝ト)ル', '}', '+', 'a', '[', 'href', ']', '*', '2p', '^', 'ul', '>', '(', 'li', '#', 'toc_list', '$', '*', '2', '>', 'a', '[', 'href', '=', '"', 'sec$*3', '"', ' ', 'class', '=', '"', 'toc', '"', ']', ')', '^', 'p', '.', 'talker', '$', '*', '2', '*', '5', '.', 'end']
//
// $→*の次に\d+\w+があったら、\d+, \wにする
// ['section', '>', 'h1', '#', 'article-title', '{', 'タ>イ＝ト)ル', '}', '+', 'a', '[', 'href', ']', '*', '2', 'p', '^', 'ul', '>', '(', 'li', '#', 'toc_list', '$', '*', '2', '>', 'a', '[', 'href', '=', '"', 'sec$*3', '"', ' ', 'class', '=', '"', 'toc', '"', ']', ')', '^', 'p', '.', 'talker', '$', '*', '2', '*', '5', '.', 'end']

export const emmetToDOM = emmet => {
    const valueGrouping = split => {
        let inCurly = 0;
        let inQuote = 0;
    };
    let emmetSplit = emmet.match(/[\w-]+|\W/g);
};