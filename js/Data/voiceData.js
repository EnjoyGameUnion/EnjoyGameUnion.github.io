/**
 * voiceModel.js
 * ボイスボタン データ定義
 * ▼ ボタンを追加・カテゴリを追加する場合はこのファイルのみ変更してください
 *
 * 【ファイルの置き場所】
 *   voice.html と同じ階層に audio/ フォルダを作り、
 *   その中に .mp3 ファイルを入れてください。
 *
 *   例)  audio/anri_yoroshiku.mp3
 *
 * 【src の書き方】
 *   src: "audio/ファイル名.mp3"
 *
 * 【ファイルがまだない場合】
 *   src: "" のままにしておけばボタンは表示されます
 *   （クリックしても音は鳴りません）
 */

const VOICE_CATEGORIES = [
  {
    id: "ElilyEliy",
    en: "エリリ エリ",
    jp: "エリリ・エリ",
    icon: "fa-solid fa-microphone",
    voices: [
      { id: "ElilyEliy-01", label: "よろしくお願いします。", src: "/audio/エリリ・エリ/エリリ_01_よろしくお願いします。.mp3" },
      { id: "ElilyEliy-02", label: "エクスプロージョン詠唱", src: "/audio/エリリ・エリ/エリリ_02_エクスプロージョン詠唱.mp3" },
      { id: "ElilyEliy-03", label: "うるさいなぁホントに", src: "/audio/エリリ・エリ/エリリ_03_うるさいなぁホントに.mp3" },
      { id: "ElilyEliy-04", label: "ざーこざーこ♪", src: "/audio/エリリ・エリ/エリリ_04_ざーこざーこ.mp3" },
      { id: "ElilyEliy-05", label: "手つなご、そっちのほうが暖かいよ", src: "/audio/エリリ・エリ/エリリ_05_手つなご、そっちのほうが暖かいよ.mp3" },
    ]
  },
  {
    id: "komatsu",
    en: "こまつちま",
    jp: "こまつちま",
    icon: "fa-solid fa-microphone",
    voices: [
      { id: "komatsu-01", label: "お邪魔しま～っす", src: "/audio/こまつ/komatsu_01_お邪魔しま～っす.mp3" },
    ]
  },
  {
    id: "UTAN",
    en: "UTAN",
    jp: "うーたん",
    icon: "fa-solid fa-microphone",
    voices: [
      { id: "UTAN-01", label: "ジト目マヌカのUTANだよ～", src: "/audio/UTAN/UTAN_01_ジト目マヌカのUTANだよ～.mp3" },
      { id: "UTAN-02", label: "もっと上目指しちゃうんだよネ", src: "/audio/UTAN/UTAN_02_もっと上目指しちゃうんだよネ.mp3" },
      { id: "UTAN-03", label: "ととちゃんが拾いやすいようにめっちゃお肉投げてる今", src: "/audio/UTAN/UTAN_03_ととちゃんが拾いやすいようにめっちゃお肉投げてる今.mp3" },
    ]
  },
  {
    id: "Tooka",
    en: "Tooka",
    jp: "トーカ",
    icon: "fa-solid fa-microphone",
    voices: [
      { id: "Tooka-01", label: "お嬢様、本日もお疲れ様でございました", src: "/audio/Tooka/Tooka_01_お嬢様、本日もお疲れ様でございました.mp3" },
    ]
  },
  {
    id: "shiranatsu_haru",
    en: "白夏ハル",
    jp: "ハルちゃん！",
    icon: "fa-solid fa-microphone",
    voices: [
      { id: "shiranatsu_haru-01", label: "はる吸いってなんですか？", src: "/audio/haru/Haru_01_はる吸いってなんですか？.mp3" },
    ]
  },
  {
    id: "tukkydanibuta",
    en: "？？？",
    jp: "Coming soon...",
    icon: "fa-solid fa-microphone",
    voices: [
      { id: "tukkydanibuta-01", label: "？？？", src: "/audio/tukkydanibuta/Tukkydanibuta_01_???.mp3" },
      { id: "tukkydanibuta-02", label: "？？？", src: "/audio/tukkydanibuta/Tukkydanibuta_02_???.mp3" },
      { id: "tukkydanibuta-03", label: "？？？", src: "/audio/tukkydanibuta/Tukkydanibuta_03_???.mp3" },
      { id: "tukkydanibuta-04", label: "？？？", src: "/audio/tukkydanibuta/Tukkydanibuta_04_???.mp3" },
    ]
  },
];
