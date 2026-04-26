/**
 * newsModel.js
 * ニュースコンテンツ データ定義
 * ▼ ニュースを追加・編集する場合はこのファイルのみ変更してください
 */

const newsContent = [
  {
    id: 1,
    title: "バラエティ動画『おしゃれ番長 エリリ・エリ コーデバトル』公開！",
    date: "2026.01.30",
    tag: "動画更新",
    thumb: "./img/news/NEWS-01-01.webp",
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
    thumb: "./img/news/NEWS-02-01.webp",
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
    thumb: "./img/news/NEWS-03-01.webp",
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
    thumb: "./img/news/NEWS-04-01.webp",
    body: `<img src="./img/news/NEWS-04-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="メスガキに耳かきをされるシチュボ">

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
    thumb: "./img/news/NEWS-05-01.webp",
    body: `<img src="./img/news/NEWS-05-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="EGU公式サイト">

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
    title: "【EGUゲーム部】『誰の頭が一番《Ultimate》かって話』公開！",
    date: "2026.04.07",
    tag: "Live配信",
    thumb: "./img/news/NEWS-06-01.webp",
    body: `<img src="./img/news/NEWS-06-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="EGU ライブ配信 Ultimate Chicken Hose">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            EGUゲーム部 Ultimate Chicken Hoseをプレイします！
        </h3>
        
        <p class="mb-6 text-slate-600 leading-loose">
            EnjoyGameUnion所属メンバー、EGUゲーム部によるゲーム配信を実施！<br>
            個性豊かなメンバーによるわちゃわちゃした配信をぜひお楽しみください。
        </p>
        
        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-8">
            <iframe 
                class="w-full h-full rounded-3xl shadow-2xl" 
                src="https://www.youtube.com/embed/XqBU2FS48Zg?rel=0" 
                title="EGU ゲーム配信" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
        
        <h3 class="text-xl font-bold mb-4">◆出演者</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>ぐらすず　<a href="https://x.com/gura_ow2" target="_blank" class="text-primary underline">https://x.com/gura_ow2</a><br>アルティメイトな馬枠</li>
            <li>すもももももっく　<a href="https://x.com/eiheihei_dk" target="_blank" class="text-primary underline">https://x.com/eiheihei_dk</a><br>イケメンイケボな鳥枠</li>
            <li>エリリ・エリ　<a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">https://x.com/nameSnow66</a><br>あわてんぼうな羊枠</li>
            <li>まじぇんて　<a href="https://x.com/majennte_vrc" target="_blank" class="text-primary underline">https://x.com/majennte_vrc</a><br>勝手に暴れまわる狸枠</li>
        </ul>
        
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Related Content</p>
            <ul class="space-y-3 text-slate-600">
                <li>
                    ★Sava&こまつちま歌ってみた動画「革命デュアリズム」公開中！<br>
                    <a href="https://www.youtube.com/watch?v=4qaMwhXaW2c" target="_blank" class="text-primary underline">
                        https://www.youtube.com/watch?v=4qaMwhXaW2c
                    </a>
                </li>
                <li>
                    ★ずんだゆき シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8058227" target="_blank" class="text-primary underline">
                        震える君を抱きしめて
                    </a>
                </li>
                <li>
                    ★こまつちま シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8151321" target="_blank" class="text-primary underline">
                        メスガキの耳かきで屈服させられる
                    </a>
                </li>
            </ul>
        </div>
        
        <p class="mb-8 text-slate-600 leading-loose">
            この配信はVRC内のグループ「Enjoy Game Union（EGU）」所属メンバーがお届けするゲーム配信です。
        </p>`,
  },
  {
    id: 7,
    title: "【フレ＋隅っこラジオ】ゲスト：ずんだゆき 公開！",
    date: "2026.04.10",
    tag: "Live配信",
    thumb: "./img/news/NEWS-07-01.webp",
    body: `<img src="./img/news/NEWS-07-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="フレ＋隅っこラジオずんだゆき">
  
          <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
              【フレ＋隅っこラジオ】ゲスト：ずんだゆきを公開しました。
          </h3>
  
          <p class="mb-6 text-slate-600 leading-loose">
              トッサノ、アンリによるフレ＋隅っこラジオのLive配信を行いました。<br>
              ずんだゆきからどんな秘密が飛び出すのか！？<br>
              ぜひアーカイブでお楽しみください。
          </p>
  
          <!-- YouTube埋め込み -->
          <div class="aspect-video w-full mb-8">
              <iframe 
                  class="w-full h-full rounded-3xl shadow-2xl" 
                  src="https://www.youtube.com/embed/vPBCsqsgzyw?rel=0"
                  title="Live配信アーカイブ" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
              </iframe>
          </div>
  
          <h3 class="text-xl font-bold mb-4">◆メインパーソナリティー</h3>
            <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
                <li>トッサノ　<a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">https://x.com/tossanovrc</a><br>EGUという謎グループの主催、エイプリルフールに動画を上げて疲れた</li>
                <li>Dr.Anri　<a href="https://x.com/Es96L4ap" target="_blank" class="text-primary underline">https://x.com/Es96L4ap</a><br>EGU所属の自称一般人、アイドルになるらしい、乞うご期待</li>
            </ul>

          <h3 class="text-xl font-bold mb-4">◆ゲスト</h3>
            <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
                <li>ずんだゆき　<a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">https://x.com/zund_Yuki</a><br>EGUメンバーの優しいお兄さん担当、いつ寝てるんだろうってぐらいぶいちゃでも仕事しかしてない</li>
            </ul>
        
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Related Content</p>
            <ul class="space-y-3 text-slate-600">
                <li>
                    ★EnjoyGameUnion!!公式HP<br>
                    <a href="https://enjoygameunion.github.io" target="_blank" class="text-primary underline">
                        https://enjoygameunion.github.io
                    </a>
                </li>
                <li>
                    ★ずんだゆき シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8058227" target="_blank" class="text-primary underline">
                        震える君を抱きしめて
                    </a>
                </li>
                <li>
                    ★こまつちま シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8151321" target="_blank" class="text-primary underline">
                        メスガキの耳かきで屈服させられる
                    </a>
                </li>
                <li>
                    ★まじぇんて酒飲み相談室その2【ゲスト：こまつちま】<br>
                    <a href="https://youtube.com/live/P9nF0JQ3K7w" target="_blank" class="text-primary underline">
                        まじぇんて酒飲み相談室その2
                    </a>
                </li>
                <li>
                    ★EGUゲーム部<br>
                    <a href="https://www.youtube.com/playlist?list=PLsYg7sr7EZhMXmscI7dvX-0KCFi5agQf_" target="_blank" class="text-primary underline">
                        EGUゲーム部
                    </a>
                </li>
                <li>
                    ★ラウラ・セッテ🌿4月1日に舞い降りた天使系アイドル!!<br>
                    <a href="https://x.com/aruaLirpa/status/2042508542540943828?s=20" target="_blank" class="text-primary underline">
                        ラウラ凸待ち配信！
                    </a>
                </li>
            </ul>
        </div>
        
        <p class="mb-8 text-slate-600 leading-loose">
            この配信はVRC内のグループ「Enjoy Game Union（EGU）」所属メンバーがお届けするラジオ配信です。
        </p>`
  },
  {
    id: 8,
    title: "【まじぇんて酒飲み相談室】第2回 ゲスト：こまつちま",
    date: "2026.04.15",
    tag: "Live配信",
    thumb: "./img/news/NEWS-08-01.webp",
    body: `<img src="./img/news/NEWS-08-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="まじぇんて酒飲み相談室 第2回">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            【第2回】まじぇんて酒飲み相談室
        </h3>

        <p class="mb-2 text-slate-600 leading-loose">
            📅 2026年04月15日（水）21:00〜
        </p>

        <p class="mb-6 text-slate-600 leading-loose">
            お酒片手に何でも相談に乗る（かもしれない）配信、第2回！<br>
            今回はゲストにこまつちまを迎え、縦横無尽にぶった切るトークをお届けします！
        </p>

        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <p class="text-sm font-bold text-amber-700 mb-3 uppercase tracking-widest">⚠ ご視聴の前に</p>
            <ul class="text-slate-600 leading-loose space-y-1 text-sm">
                <li>※飲酒してるので発言に責任が取れたり取れなかったりしがちです</li>
                <li>※急に大声を出す場合があるので音量注意</li>
            </ul>
        </div>

        <div class="flex justify-center my-8">
            <a href="https://marshmallow-qa.com/9g30tl6rxqlqb4b?t=ieNI7S&utm_medium=url_text&utm_source=promotion" target="_blank"
                class="group flex items-center gap-3 bg-pink-400 text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-pink-100 hover:bg-pink-500 hover:-translate-y-1 transition-all duration-300">
                <i class="fa-solid fa-envelope-open-text text-xl"></i>
                <span>ましゅまろで相談を送る</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            </a>
        </div>

        <h3 class="text-xl font-bold mb-4">◆出演者</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>
                <strong>まじぇんて</strong>　<a href="https://x.com/majennte_vrc" target="_blank" class="text-primary underline">https://x.com/majennte_vrc</a><br>
                黒髪ロングの赤目ルルネ好きのお兄さん。<br>
                今宵は酒が入って切れ味がいつもの数段上がっている。
            </li>
            <li>
                <strong>こまつちま</strong>　<a href="https://x.com/komatsu_chiii" target="_blank" class="text-primary underline">https://x.com/komatsu_chiii</a><br>
                いつも笑顔な歌うま絵うまお姉さん。<br>
                今宵はお酒を片手に縦横無尽にぶった切る！？
            </li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Related Content</p>
            <ul class="space-y-3 text-slate-600">
                <li>
                    ★こまつちまシチュエーションボイス<br>
                    メスガキの耳かきで屈服させられる【メスガキに耳かきをされるシチュボ】販売中<br>
                    <a href="https://egu.booth.pm/items/8151321" target="_blank" class="text-primary underline">
                        https://egu.booth.pm/items/8151321
                    </a>
                </li>
                <li>
                    ★EGUあにまるず歌ってみた動画「ようこそジャパリパークへ」公開中！<br>
                    <a href="https://www.youtube.com/watch?v=gLAd9EQtDpc&feature=youtu.be" target="_blank" class="text-primary underline">
                        https://www.youtube.com/watch?v=gLAd9EQtDpc
                    </a>
                </li>
                <li>
                    ★Sava&こまつちま歌ってみた動画「革命デュアリズム」公開中！<br>
                    <a href="https://www.youtube.com/watch?v=4qaMwhXaW2c" target="_blank" class="text-primary underline">
                        https://www.youtube.com/watch?v=4qaMwhXaW2c
                    </a>
                </li>
            </ul>
        </div>

        <p class="mb-8 text-slate-600 leading-loose">
            この配信はVRC内のグループ「Enjoy Game Union（EGU）」所属メンバーがお届けするLive配信です。
        </p>`
  },
//   {
//     id: 9,
//     title: "【麻雀大会】春季麻雀大会、開催ッッッ！！！",
//     date: "2026.04.17",
//     tag: "Live配信",
//     thumb: "./img/news/NEWS-09-01.webp",
//     body: `<img src="./img/news/NEWS-09-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="春季麻雀大会">

//         <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
//             春季麻雀大会、開催ッッッ！！！
//         </h3>

//         <p class="mb-6 text-slate-600 leading-loose">
//             今夜、20名の雀士たちがシノギを削る麻雀バトル、開幕ッッッ！！！<br>
//             熱き戦いの行方をぜひリアルタイムでご覧ください！
//         </p>

//         <div class="overflow-hidden border border-slate-100 rounded-2xl mb-8">
//             <table class="w-full text-left border-collapse">
//                 <tr class="bg-slate-50">
//                     <th class="p-4 border-b border-slate-100 font-bold text-slate-600 w-1/3">主催</th>
//                     <td class="p-4 border-b border-slate-100">
//                         Sava　<a href="https://x.com/Sava_403" target="_blank" class="text-primary underline">https://x.com/Sava_403</a>
//                     </td>
//                 </tr>
//                 <tr>
//                     <th class="p-4 border-b border-slate-100 font-bold text-slate-600">実況・解説</th>
//                     <td class="p-4 border-b border-slate-100">
//                         Tooka　<a href="https://x.com/t1o0k" target="_blank" class="text-primary underline">https://x.com/t1o0k</a>
//                     </td>
//                 </tr>
//                 <tr class="bg-slate-50">
//                     <th class="p-4 font-bold text-slate-600">技術スタッフ</th>
//                     <td class="p-4">
//                         ずんだゆき　<a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">https://x.com/zund_Yuki</a>
//                     </td>
//                 </tr>
//             </table>
//         </div>

//         <h3 class="text-xl font-bold mb-4">◆各視点</h3>
//         <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside space-y-1">
//             <li>エリリ・エリ　<a href="https://www.youtube.com/@namesnow66" target="_blank" class="text-primary underline">namesnow66</a></li>
//             <li>きゅう　（<a href="https://www.youtube.com/watch?v=_placeholder_kyu" target="_blank" class="text-primary underline">【雀鯖杯|グループ予選/D卓】僕以外全員焼き鳥！！！#雀鯖杯【きゅう視点】</a>）</li>
//             <li>白夏ハル　<a href="https://www.youtube.com/@shiranatsu" target="_blank" class="text-primary underline">shiranatsu</a></li>
//             <li>ちぇるびん　<a href="https://www.youtube.com/@che1bin" target="_blank" class="text-primary underline">che1bin</a></li>
//             <li>てとらまる　<a href="https://www.youtube.com/@tetramarumaru" target="_blank" class="text-primary underline">tetramarumaru</a></li>
//             <li>佃煮ブラスター　<a href="https://youtube.com/live/TCy5cNLLEsI" target="_blank" class="text-primary underline">https://youtube.com/live/TCy5cNLLEsI</a></li>
//         </ul>

//         <h3 class="text-xl font-bold mb-4">◆出演者（20名）</h3>
//         <div class="overflow-hidden border border-slate-100 rounded-2xl mb-8">
//             <table class="w-full text-left border-collapse text-sm">
//                 <thead>
//                     <tr class="bg-slate-100">
//                         <th class="p-3 border-b border-slate-200 font-bold text-slate-600 text-center w-12">No</th>
//                         <th class="p-3 border-b border-slate-200 font-bold text-slate-600">名前</th>
//                         <th class="p-3 border-b border-slate-200 font-bold text-slate-600">雀魂名</th>
//                         <th class="p-3 border-b border-slate-200 font-bold text-slate-600">X（Twitter）</th>
//                     </tr>
//                 </thead>
//                 <tbody class="text-slate-600">
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">01</td><td class="p-3 border-b border-slate-100">garavella</td><td class="p-3 border-b border-slate-100">がらろ</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/garavella1010" target="_blank" class="text-primary underline">@garavella1010</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">02</td><td class="p-3 border-b border-slate-100">ibumelon</td><td class="p-3 border-b border-slate-100">ibumelon</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/melon3837" target="_blank" class="text-primary underline">@melon3837</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">03</td><td class="p-3 border-b border-slate-100">komatsu</td><td class="p-3 border-b border-slate-100">komatsu</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/komatsu_chiii" target="_blank" class="text-primary underline">@komatsu_chiii</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">04</td><td class="p-3 border-b border-slate-100">majennte</td><td class="p-3 border-b border-slate-100">マジェスタス</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/majennte_vrc" target="_blank" class="text-primary underline">@majennte_vrc</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">05</td><td class="p-3 border-b border-slate-100">rneguri</td><td class="p-3 border-b border-slate-100">meguri</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/rneguri" target="_blank" class="text-primary underline">@rneguri</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">06</td><td class="p-3 border-b border-slate-100">saboint99</td><td class="p-3 border-b border-slate-100">gogogoing</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/morrimorriGhh" target="_blank" class="text-primary underline">@morrimorriGhh</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">07</td><td class="p-3 border-b border-slate-100">Shiranatsu_haru</td><td class="p-3 border-b border-slate-100">xしらなつx</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/shiranatsu_haru" target="_blank" class="text-primary underline">@shiranatsu_haru</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">08</td><td class="p-3 border-b border-slate-100">Zunda315</td><td class="p-3 border-b border-slate-100">ぜろしきむげん</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/Zunda315_VR" target="_blank" class="text-primary underline">@Zunda315_VR</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">09</td><td class="p-3 border-b border-slate-100">エリリ・エリ</td><td class="p-3 border-b border-slate-100">エリリ・エリ</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">@nameSnow66</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">10</td><td class="p-3 border-b border-slate-100">かぐやねぃ</td><td class="p-3 border-b border-slate-100">かぐやねぃちゃ</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/kaguya_nei_VRC" target="_blank" class="text-primary underline">@kaguya_nei_VRC</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">11</td><td class="p-3 border-b border-slate-100">きゅう９</td><td class="p-3 border-b border-slate-100">Europort</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/9___9_nine" target="_blank" class="text-primary underline">@9___9_nine</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">12</td><td class="p-3 border-b border-slate-100">しーろさん</td><td class="p-3 border-b border-slate-100">N309</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/C6C6_vrc" target="_blank" class="text-primary underline">@C6C6_vrc</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">13</td><td class="p-3 border-b border-slate-100">しんやぞ</td><td class="p-3 border-b border-slate-100">マグロの教祖2</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/Zz_sinsin_Zz" target="_blank" class="text-primary underline">@Zz_sinsin_Zz</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">14</td><td class="p-3 border-b border-slate-100">ちぇるびん</td><td class="p-3 border-b border-slate-100">ばさしポンする</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/chelb1n" target="_blank" class="text-primary underline">@chelb1n</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">15</td><td class="p-3 border-b border-slate-100">てとらまる</td><td class="p-3 border-b border-slate-100">ゆのちょす</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/tetora1747" target="_blank" class="text-primary underline">@tetora1747</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">16</td><td class="p-3 border-b border-slate-100">トッサノ</td><td class="p-3 border-b border-slate-100">咄嗟の魚拓</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">@tossanovrc</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">17</td><td class="p-3 border-b border-slate-100">ひすいのたけ</td><td class="p-3 border-b border-slate-100">—</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/8TP0tg5Tje18575" target="_blank" class="text-primary underline">@8TP0tg5Tje18575</a></td></tr>
//                     <tr><td class="p-3 border-b border-slate-100 text-center">18</td><td class="p-3 border-b border-slate-100">霞澄さん</td><td class="p-3 border-b border-slate-100">霞澄さんさん</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/kasumisan_VR" target="_blank" class="text-primary underline">@kasumisan_VR</a></td></tr>
//                     <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100 text-center">19</td><td class="p-3 border-b border-slate-100">佃煮ブラスター</td><td class="p-3 border-b border-slate-100">佃煮ブラスター</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/tukkydanibuta" target="_blank" class="text-primary underline">@tukkydanibuta</a></td></tr>
//                     <tr><td class="p-3 text-center">20</td><td class="p-3">萌葱ねる</td><td class="p-3">ねるくん２</td><td class="p-3"><a href="https://x.com/moegineru_vrc" target="_blank" class="text-primary underline">@moegineru_vrc</a></td></tr>
//                 </tbody>
//             </table>
//         </div>

//         <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
//             <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Related Content</p>
//             <ul class="space-y-3 text-slate-600">
//                 <li>
//                     ★こまつちまシチュエーションボイス<br>
//                     メスガキの耳かきで屈服させられる【メスガキに耳かきをされるシチュボ】販売中<br>
//                     <a href="https://egu.booth.pm/items/8151321" target="_blank" class="text-primary underline">
//                         https://egu.booth.pm/items/8151321
//                     </a>
//                 </li>
//                 <li>
//                     ★ずんだゆきシチュエーションボイス<br>
//                     震える君を抱きしめて【サド甘お兄さんに死ぬほど愛されるシチュボ】販売中！<br>
//                     <a href="https://egu.booth.pm/items/8058227" target="_blank" class="text-primary underline">
//                         https://egu.booth.pm/items/8058227
//                     </a>
//                 </li>
//             </ul>
//         </div>

//         <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//             <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About EGU</p>
//             <ul class="space-y-2 text-slate-600">
//                 <li>
//                     公式HP：<a href="https://enjoygameunion.github.io/" target="_blank" class="text-primary underline">https://enjoygameunion.github.io/</a>
//                 </li>
//                 <li>
//                     公式X：<a href="https://x.com/EnjoyGameUnion" target="_blank" class="text-primary underline">https://x.com/EnjoyGameUnion</a>
//                 </li>
//             </ul>
//         </div>`
//   }
//   {
//     id: 6,
//     title: "Live配信『誰の頭が一番《Ultimate》かって話』【EGUゲーム部】開始",
//     date: "2026.04.07",
//     tag: "Live配信",
//     thumb: "./img/news/NEWS-01-01.webp",
//     body: `<img src="./img/news/NEWS-04-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="EGU公式サイト">

//         <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
//             EnjoyGameUnion!! 公式サイト公開のお知らせ
//         </h3>

//         <p class="mb-6 text-slate-600 leading-loose">
//             この度、EnjoyGameUnion!!の公式Webサイトをオープンいたしました。<br>
//             本サイトでは、動画投稿や活動報告、お知らせなどを中心に、EGUの様々な取り組みを発信していきます。
//         </p>

//         <p class="mb-8 text-slate-600 leading-loose">
//             今後はコンテンツの拡充や情報更新を随時行ってまいりますので、ぜひ定期的にご覧いただけますと幸いです。<br>
//             これからもEnjoyGameUnion!!をよろしくお願いいたします。
//         </p>

//         <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//             <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About</p>
//             <p class="text-slate-600 leading-loose">
//                 EnjoyGameUnion!!は、「楽しくゲームをすること」をモットーに活動するコミュニティです。<br>
//                 今後も様々な企画やコンテンツを展開してまいります。
//             </p>
//         </div>`,
//   },

  /* ===投稿テンプレ=== */
  // {
  //     id: ,
  //     title: "タイトル",
  //     date: "YYYY.MM.DD",
  //     tag: "お知らせ・活動報告・動画更新",
  //     thumb: "サムネ画像",
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
