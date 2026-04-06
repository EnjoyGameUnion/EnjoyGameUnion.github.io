const newsContent = [
  {
    id: 1,
    title: "バラエティ動画『おしゃれ番長 エリリ・エリ コーデバトル』公開！",
    date: "2026.01.30",
    tag: "動画更新",
    thumbnail: "",
    body: `<img src="./img/news/NEWS-01-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="おしゃれ番長">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            『おしゃれ番長 エリリ・エリ コーデバトル』公開！
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            本番組は、VRChat内グループ「Enjoy Game Union（略称：EGU）」に所属するエリリ・エリがお届けするバラエティ企画です。<br>
            個性豊かなメンバーたちと共に繰り広げられる“コーデバトル”をぜひお楽しみください。
        </p>

        <!-- YouTube埋め込み（前編） -->
        <div class="aspect-video w-full mb-8">
            <iframe 
                class="w-full h-full rounded-3xl shadow-2xl" 
                src="https://www.youtube.com/embed/HITavvIhxUI?rel=0"
                title="【前編】おしゃれ番長 エリリ・エリ コーデバトル" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>

        <p class="mb-8 text-slate-600 leading-loose">
            後編はこちら：<br>
            <a href="https://youtu.be/ChLeWgKQbZ8" class="text-primary underline" target="_blank">
                https://youtu.be/ChLeWgKQbZ8
            </a>
        </p>

        <h3 class="text-xl font-bold mb-4">◆出演者</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li><strong>エリリ・エリ</strong><br>EGU所属の自称清楚担当。何故か今回30分越えの番組を作ることに。</li>
            <li><strong>UTAN</strong><br>EGU所属の歌姫。全会一致でいい女。</li>
            <li><strong>Sava</strong><br>EGU所属の兄貴。大体のことに巻き込まれている。</li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Links</p>
            <ul class="space-y-2 text-slate-600">
                <li>
                    ◆エリリ・エリ X<br>
                    <a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">
                        https://x.com/nameSnow66
                    </a>
                </li>
                <li>
                    ◆UTAN X<br>
                    <a href="https://x.com/UTANdayote" target="_blank" class="text-primary underline">
                        https://x.com/UTANdayote
                    </a>
                </li>
                <li>
                    ◆Sava X<br>
                    <a href="https://x.com/Sava_403" target="_blank" class="text-primary underline">
                        https://x.com/Sava_403
                    </a>
                </li>
                </ul>
        </div>

        <h3 class="text-xl font-bold mb-4">◆クレジット</h3>
        <p class="text-slate-600 leading-loose">
            サムネイルイラスト：４８８様<br>
            <a href="https://x.com/wassyoihohohoi" target="_blank" class="text-primary underline">
                https://x.com/wassyoihohohoi
            </a>
        </p>`,
  },
  {
    id: 2,
    title: "歌ってみた動画『ようこそジャパリパークへ』公開！",
    date: "2026.02.14",
    tag: "動画更新",
    body: `<img src="./img/news/NEWS-02-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="ようこそジャパリパークへ">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            『ようこそジャパリパークへ』歌ってみた公開！
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            EGUあにまるずによる『ようこそジャパリパークへ』の歌ってみた動画を公開しました！<br>
            沢山の楽しいことへ！
        </p>

        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-8">
            <iframe 
                class="w-full h-full rounded-3xl shadow-2xl" 
                src="https://www.youtube.com/embed/gLAd9EQtDpc?rel=0" 
                title="【歌ってみた】ようこそジャパリパークへ / EGUあにまるず【UTAN×エリリ・エリ×Tooka×とと】" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>

        <p class="mb-8 text-slate-600 leading-loose">
            本家様：<br>
            <a href="https://www.youtube.com/watch?v=xkMdLcB_vNU" target="_blank" class="text-primary underline">
                https://www.youtube.com/watch?v=xkMdLcB_vNU
            </a>
        </p>

        <h3 class="text-xl font-bold mb-4">◆Vocal</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>UTAN　<a href="https://x.com/UTANdayote" target="_blank" class="text-primary underline">https://x.com/UTANdayote</a></li>
            <li>エリリ・エリ　<a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">https://x.com/nameSnow66</a></li>
            <li>Tooka　<a href="https://x.com/t1o0k" target="_blank" class="text-primary underline">https://x.com/t1o0k</a></li>
            <li>とと　<a href="https://x.com/Tototo_Tatin" target="_blank" class="text-primary underline">https://x.com/Tototo_Tatin</a></li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆制作</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>inst / mix：桜結ゆぴ　<a href="https://x.com/yupimusubi" target="_blank" class="text-primary underline">https://x.com/yupimusubi</a></li>
            <li>動画：トッサノ　<a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">https://x.com/tossanovrc</a></li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆イラスト</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>サムネイラスト：４８８　<a href="https://x.com/wassyoihohohoi" target="_blank" class="text-primary underline">https://x.com/wassyoihohohoi</a></li>
            <li>SDイラスト：住処　<a href="https://x.com/heiti__shiki" target="_blank" class="text-primary underline">https://x.com/heiti__shiki</a></li>
            <li>デフォルメイラスト：Tooka / Dr.Anri　<a href="https://x.com/Es96L4ap" target="_blank" class="text-primary underline">https://x.com/Es96L4ap</a></li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Project</p>
            <ul class="space-y-2 text-slate-600">
                <li>歌詞振り分け：Sava　<a href="https://x.com/Sava_403" target="_blank" class="text-primary underline">https://x.com/Sava_403</a></li>
                <li>マネジメント：ずんだゆき　<a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">https://x.com/zund_Yuki</a></li>
                <li>プロジェクト管理：あいづたか　<a href="https://x.com/TakaAizu" target="_blank" class="text-primary underline">https://x.com/TakaAizu</a></li>
            </ul>
        </div>`,
  },
  {
    id: 3,
    title: "ボイス『震える君を抱きしめて』販売開始！",
    date: "2026.03.14",
    tag: "活動報告",
    body: `<img src="./img/news/NEWS-03-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="震える君を抱きしめて">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            シチュエーションボイス『震える君を抱きしめて』販売開始
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            ずんだゆきによるシチュエーションボイス『震える君を抱きしめて』を販売開始しました。<br>
            優しさと狂気が交差する、没入感のある音声作品となっています。
        </p>
        <div class="flex justify-center my-8">
            <a href="https://booth.pm/ja/items/8058227" target="_blank" 
                class="group flex items-center gap-3 bg-[#fc4d50] text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-red-100 hover:bg-[#ff5a5d] hover:-translate-y-1 transition-all duration-300">
                <i class="fa-solid fa-cart-shopping text-xl"></i>
                <span>BOOTHでチェックする</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            </a>
        </div>

        <h3 class="text-xl font-bold mb-4">◆音声概要</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            雨の夜、帰宅したあなたを待っていたのは、優しくもどこか危うい愛を向ける彼。<br>
            濡れた体を気遣いながら、逃げようとする気配さえも見逃さず、静かに距離を詰めてくる。<br><br>
            「君を理解できるのは、世界で俺だけ。」<br><br>
            甘く包み込む言葉と、逃がさない独占欲。<br>
            優しさの奥に潜む狂気が、あなたを少しずつ絡め取っていく――。
        </p>

        <h3 class="text-xl font-bold mb-4">◆収録内容</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>本編：0:10:51</li>
            <li>形式：WAV / 動画編集版MP4同梱</li>
            <li>特典：メッセージカード・手書きメモ付き台本（おやつ代）</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆注意事項</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            本作品はご購入者様の個人利用に限定されます。<br>
            データ商品の二次配布・無断転載は固く禁じます。
        </p>

        <h3 class="text-xl font-bold mb-4">◆クレジット</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>ボイスアクター：ずんだゆき<br>
                <a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">
                    https://x.com/zund_Yuki
                </a>
            </li>
            <li>効果音・音声協力：たくあんダヨ様<br>
                <a href="https://x.com/takuan_vr0721" target="_blank" class="text-primary underline">
                    https://x.com/takuan_vr0721
                </a>
            </li>
            <li>動画協力：トッサノ<br>
                <a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">
                    https://x.com/tossanovrc
                </a>
            </li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">BGM</p>
            <p class="text-slate-600 leading-loose">
                フリー音楽素材 H/MIX GALLERY<br>
                管理者：秋山裕和<br>
                <a href="http://www.hmix.net/" target="_blank" class="text-primary underline">
                    http://www.hmix.net/
                </a>
            </p>
        </div>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Assets</p>
            <ul class="text-slate-600 leading-loose list-disc list-inside">
                <li>ぽんでろ様：オリジナル3Dモデル「しなの」</li>
                <li>LAYON様：【3D】WHITE DUSK =HOMME=</li>
                <li>Metror様：MELOW Eye texture1＆2</li>
                <li>Tonarino様：Unisex Short cut</li>
            </ul>
        </div>`,
  },
  {
    id: 4,
    title: "ボイス『メスガキの耳かきで屈服』販売開始！",
    date: "2026.04.01",
    tag: "活動報告",
    body: `<img src="./img/news/NEWS-05-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="メスガキに耳かきをされるシチュボ">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            シチュエーションボイス『メスガキの耳かきで屈服』販売開始
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            こまつちまによるシチュエーションボイス『メスガキの耳かきで屈服』を販売開始しました。<br>
            小悪魔的な挑発と心地よさが交差する、没入感のある音声作品となっています。
        </p>
        <div class="flex justify-center my-8">
            <a href="https://egu.booth.pm/items/8151321" target="_blank" 
                class="group flex items-center gap-3 bg-[#fc4d50] text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-red-100 hover:bg-[#ff5a5d] hover:-translate-y-1 transition-all duration-300">
                <i class="fa-solid fa-cart-shopping text-xl"></i>
                <span>BOOTHでチェックする</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            </a>
        </div>

        <h3 class="text-xl font-bold mb-4">◆音声概要</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            一人暮らしの家に突然やってきた、小悪魔的で距離感の近い少女。<br>
            生活ぶりをからかいながらも自然と距離を縮め、耳かきで勝負を持ちかける……<br>
            <br>
            甘く挑発的なやり取りに翻弄されながら、癒やしとドキドキが交差していく――<br>
            そんな不思議なひとときを描いたシチュエーションボイスです。
        </p>

        <h3 class="text-xl font-bold mb-4">◆収録内容</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>本編：0:12:01</li>
            <li>形式：WAV / 動画編集版MP4同梱</li>
            <li>おやつ代のみメッセージカード付き</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆注意事項</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            ご購入者様の個人利用にのみ限定させて頂きます。<br>
            データ商品の二次配布・無断転載を固く禁じます。
        </p>

        <h3 class="text-xl font-bold mb-4">◆クレジット</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>ボイスアクター：こまつちま<br>
                <a href="https://x.com/komatsu_chiii" target="_blank" class="text-primary underline">
                    https://x.com/komatsu_chiii
                </a>
            </li>
            <li>動画協力：トッサノ<br>
                <a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">
                    https://x.com/tossanovrc
                </a>
            </li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Assets</p>
            <ul class="text-slate-600 leading-loose list-disc list-inside">
                <li>ジンゴ様：オリジナル3Dモデル「マヌカ」</li>
                <li>杜本様：『Twilight Greige』eye＋make＋body texture</li>
                <li>Iseo様：【Sweetie Story 】スイートストーリー</li>
                <li>pipiza様：Twinkle Tails</li>
                <li>ねここや@かんな久様：【VR-ASMRツールセット 9種類】</li>
            </ul>
        </div>`,
  },
  {
    id: 5,
    title: "EnjoyGameUnion!! 公式Webサイトをオープンしました！",
    date: "2026.04.06",
    tag: "お知らせ",
    body: `<img src="./img/news/NEWS-04-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="EGU公式サイト">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            EnjoyGameUnion!! 公式サイト公開のお知らせ
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            この度、EnjoyGameUnion!!の公式Webサイトをオープンいたしました。<br>
            本サイトでは、動画投稿や活動報告、お知らせなどを中心に、EGUの様々な取り組みを発信していきます。
        </p>

        <p class="mb-8 text-slate-600 leading-loose">
            今後はコンテンツの拡充や情報更新を随時行ってまいりますので、ぜひ定期的にご覧いただけますと幸いです。<br>
            これからもEnjoyGameUnion!!をよろしくお願いいたします。
        </p>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About</p>
            <p class="text-slate-600 leading-loose">
                EnjoyGameUnion!!は、「楽しくゲームをすること」をモットーに活動するコミュニティです。<br>
                今後も様々な企画やコンテンツを展開してまいります。
            </p>
        </div>`,
  },
  {
    id: 6,
    title: "EnjoyGameUnion!! 公式Webサイトをオープンしました！",
    date: "2026.04.06",
    tag: "Live配信",
    body: `<img src="./img/news/NEWS-04-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="EGU公式サイト">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            EnjoyGameUnion!! 公式サイト公開のお知らせ
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            この度、EnjoyGameUnion!!の公式Webサイトをオープンいたしました。<br>
            本サイトでは、動画投稿や活動報告、お知らせなどを中心に、EGUの様々な取り組みを発信していきます。
        </p>

        <p class="mb-8 text-slate-600 leading-loose">
            今後はコンテンツの拡充や情報更新を随時行ってまいりますので、ぜひ定期的にご覧いただけますと幸いです。<br>
            これからもEnjoyGameUnion!!をよろしくお願いいたします。
        </p>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About</p>
            <p class="text-slate-600 leading-loose">
                EnjoyGameUnion!!は、「楽しくゲームをすること」をモットーに活動するコミュニティです。<br>
                今後も様々な企画やコンテンツを展開してまいります。
            </p>
        </div>`,
  },

  /* ===投稿テンプレ=== */
  // {
  //     id: ,
  //     title: "タイトル",
  //     date: "YYYY.MM.DD",
  //     tag: "お知らせ・活動報告・動画更新",
  //     body: `<img src="./img/news/update.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="アイキャッチ">
  //         <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">新体制について</h3>
  //         <p class="mb-6">
  //             新メンバーの詳細は、本日20:00からの生放送にて発表いたします。ぜひリアルタイムでご覧ください。
  //         </p>
  //         <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
  //             <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Update Info</p>
  //             <ul class="list-disc list-inside space-y-2 text-slate-600">
  //                 <li>新メンバー1名加入</li>
  //                 <li>公式サイトのメンバーページ更新</li>
  //                 <li>春期限定イベントの開催決定</li>
  //             </ul>
  //         </div>'
  //  },

  /* ===以下内容テンプレ=== */
  // 追加する場合はbodyに追加してもらえばOK

  /* ===タイトル=== */
  // <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">タイトル</h3>

  /* ===YouTube=== */
  // <div class="aspect-video w-full mb-8">
  //     <iframe
  //         class="w-full h-full rounded-3xl shadow-2xl"
  //         src="https://www.youtube.com/embed/VIDEO_ID&rel=0"
  //         title="YouTube video player"
  //         frameborder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //         allowfullscreen>
  //     </iframe>
  // </div>

  /* ===BOOTHボタン=== */
  // <div class="flex justify-center my-8">
  //     <a href="https://booth.pm/ja/items/ID" target="_blank"
  //         class="group flex items-center gap-3 bg-[#fc4d50] text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-red-100 hover:bg-[#ff5a5d] hover:-translate-y-1 transition-all duration-300">
  //         <i class="fa-solid fa-cart-shopping text-xl"></i>
  //         <span>BOOTHでチェックする</span>
  //         <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
  //     </a>
  // </div>

  /* ===テーブル=== */
  // <h3 class="text-2xl font-black mb-6">テーブル</h3>
  // <div class="overflow-hidden border border-slate-100 rounded-2xl mb-8">
  //     <table class="w-full text-left border-collapse">
  //         <tr class="bg-slate-50">
  //             <th class="p-4 border-b border-slate-100 font-bold text-slate-600 w-1/3">開催日時</th>
  //             <td class="p-4 border-b border-slate-100">2026年4月25日 21:00〜</td>
  //         </tr>
  //         <tr>
  //             <th class="p-4 border-b border-slate-100 font-bold text-slate-600">種目</th>
  //             <td class="p-4 border-b border-slate-100">VRChat内 特設ゲームワールド</td>
  //         </tr>
  //         <tr class="bg-slate-50">
  //             <th class="p-4 font-bold text-slate-600">参加資格</th>
  //             <td class="p-4">Union公式Discordへの参加</td>
  //         </tr>
  //     </table>
  // </div>
  // <p class="text-slate-500 text-sm italic">
  //     ※エントリーは定員に達し次第終了となります。
  // </p>
];
