# SFP

<script>
import { Tweet } from 'vue-tweet-embed/dist'

export default {
    components: {Tweet}
}
</script>


2019年7月末から9月まで東京大学の2019 [Summer Founders Program (SFP)](https://www.ducr.u-tokyo.ac.jp/activity/venture/sfp.html)に参加しました。そのプログラムで行ったことをまとめます。

なお、以下の作品は[ピアプロ・キャラクター・ライセンス](https://piapro.jp/license/pcl/summary)に基づいてクリプトン・フューチャー・メディア株式会社のキャラクター「初音ミク」を扱ったものです。もし権利的な問題にお気づきの方がいらっしゃったら、[私のTwitterアカウント](https://twitter.com/rita_rita_ritan)までご連絡いただけると幸いです。



## Problem

> この世界にミクさんが存在しない
> という感覚。

> もっと生活の中にプレゼンスが欲しい。

以上の課題を解決するためにプロジェクトが始まりました。この課題からわかるように、想定ユーザは初音ミクのファンです。
<br></br>





## Unique Insight

本プロジェクトでは、技術的に難しいことをするというよりも、ユーザのニーズの探索に焦点を当てました。ユーザへのインタビューで得た意見の中で、特にプロジェクトにインパクトを与えたものが、以下の意見です。

* 「（初音ミクには）限りなく現実に近づいてほしいが、現実でない人でいてほしい」
* 「リアルを追求した方が初音ミクファンから受けが良いかというとそういうわけでもない」

ユーザへのインタビュー・プロトタイプの制作を繰り返し、最終的には以下のSolutionを採用しました。
<br></br>





## Solution：Mixan

PCのカメラで取得した映像から、OpenCVを用いてユーザの目の位置を取得。その位置に合わせてアプリ内のカメラを動かすことで、平面ディスプレイにおいて奥行き感・プレゼンスの増加を試みました。制作にはUnity・C#を用いました。



以下の動画はカメラの移動デモです。


<div class="iframe-wrap"><iframe
  src="https://drive.google.com/file/d/1rEj0v5hm0DH4D887bpUlF1YotCEEtMO5/preview"
  frameborder="0"/></div>

>  撮影協力：友人

<br></br>
以下のデモは最終的に没になったプロトタイプ（Mixan Box）のものですが、アプリのイメージについてはこちらの方がわかりやすいかもしれません。

<div class="iframe-wrap"><iframe src="https://drive.google.com/file/d/1uw3tpkRNJ7xcLvulqb27NbXAXuwe8H-a/preview" frameborder="0"></iframe></div>

>  撮影協力：友人



SFPではPV作成も行いましたが、チームメンバーの顔出しをしてしまっているので一般公開はしていません。企業の方にはお見せしたいのですが、PVが保存されたPCの保管場所にCOVID-19の影響でアクセスできないようで、しばらくはお見せできなそうです（PVについては主に別メンバーの担当だったので私のPCにはデータがありませんでした）。
<br></br>





## Member

SFP参加を1つの目的としてNoMikuNoLifeというチームが発足しました。このチームはTwitter上で初音ミク好きの人々が集まって形成されたという経緯があるので、メンバーは程度の差はあれ全員初音ミクが好きです。NoMikuNoLifeのメンバーのうち、最終的にSFPにフルコミットしていたのは私を含めて2名です（ともに東大工学部電気系学科の学部生です）。他のチームメイトも一部のプロセスには参加しました。
<br></br>


## Ideas

最終的には上記のようなアプリになりましたが、プロダクトを作る過程で様々なアイデアが出ました。それらのうちいくつかについて作成したプロトタイプを紹介します。

### 1. 生活習慣改善アプリ

<u>idea</u> : 初音ミクへの愛があれば生活習慣を改善できる

「初音ミクに生活を管理されると初音ミクを嫌いになってしまうかもしれない」というもっともな意見を受けて没にしました。以下、いくつかのデモを紹介します。

以下はミクさんが挨拶をしてくれるデモです。
<div class="iframe-wrap"><iframe src="https://drive.google.com/file/d/1lkwHjYmfOBWvH13908cTjuhNGp3cawwc/preview" frameborder="0"></iframe></div>

<br></br>
挨拶については声を作ってくださっている方がいたので、それを利用させていただきました。以下のデモではちょうど良い既存の音声が見つからなかったので、Open JTalkという音声合成システムを用いてミクさんのセリフを作成してあります。挨拶に比べてミクさんの声が少しぎこちないのはそのためです。
<br></br>

以下はミクさんが話しかけてくれるデモです。ここでは、ミクさんに話しかけられた時にたとえばTwitterをしていると気まずい気持ちになることを活用して、勉強時間を増やすことを試みています。ミクさんが定期的に話しかけてくれることで、勉強時間の増加を狙います。

<div class="iframe-wrap"><iframe src="https://drive.google.com/file/d/1AlmErE_rSIxcJvBQKOs4vdfoPjFqZQeu/preview" frameborder="0"></iframe></div>


<br></br>
以下はミクさんが今日の振り返りをしてくれるデモです。たくさん勉強した日は褒めてくれ、あまり勉強できなかった日は励ましてくれます。

<div class="iframe-wrap"><iframe src="https://drive.google.com/file/d/12iLzldU3LtXTQtRM3G0RxUPA7RIuBSME/preview" frameborder="0"></iframe></div>

<br></br>
当時作成したUIの遷移図は以下のような感じです。このプロトに関しては、Open JTalkによるミクさんのセリフ生成以外は、UIデザインも含めて基本的に全て私が行いました（モデルについては既存のどっと式初音ミクを使用させていただきました）。
<br></br>
![](/SFP/life_manage_ui.JPG)

ラズパイで動かすことも想定しており、ラズパイに慣れる意味もあってミクさんの時報を作ってみたりもしました。
![](/SFP/rasp_pi_miku.JPG)


<br></br>
### 2. Mixan Box
<u>idea</u> : 箱のどの角度から見ても中のミクさんの位置に矛盾がなければプレゼンスが増すのではないか

最終的なSolutionの前身となったアイデアです。デモについてはSolutionの項に載せました。プロトタイプを作ってみたところ、結局ディスプレイを増やすメリットがあまり感じられなかったため没となりました。
<br></br>


### 3. 傘へのプロジェクター投影
<u>idea</u> : 傘の内側にミクさんがいたら嬉しい

SFPとしてはメディアアートに寄るのは好ましくないようだったので没になりました。目的にかなうプロジェクターを用意するのが難しそうだったという理由もありました。
<br></br>


### 4. スマートミラー
<u>idea</u>: 鏡の中からミクさんが出てきたら嬉しい

以下がデモです。ハーフミラーを用いています。ミクさんのモデルはTda式を使わせていただいています。

<div class="iframe-wrap"><iframe src="https://drive.google.com/file/d/19mRXqdfteQ88nhgIVkXDRoBo8LPFnhRf/preview" frameborder="0"></iframe></div>

>  撮影協力：友人
>  


とても面白いのですが、技術的に難しいことがなく簡単に実現できるので、SFPとして出すのにはふさわしくないということで没になりました。

<br></br>

## Event
SFPで作ったプロダクトは、他の作品も加えて2019駒場祭に「みくみくわぁるど」という企画名で展示しました。私はこの企画の正責任者を務めました。
<br></br>

<Tweet id="1198425137659273216"></Tweet>
<br></br>
<Tweet id="1198401690564562944"></Tweet>
<br></br>
<Tweet id="1198632585175293953"></Tweet>