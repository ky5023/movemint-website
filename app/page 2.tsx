// app/page.tsx
export default function Home() {
  return (
    <>
      {/* ナビゲーション */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">MoveMint</div>
          <div className="nav-links">
            <a href="#hero">ホーム</a>
            <a href="#problem">課題</a>
            <a href="#features">機能</a>
            <a href="#business">事業者向け</a>
            <a href="#technology">技術</a>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-badge">交通オープンデータ × AI</div>
          <h1 className="hero-title">
            移動を、<br />価値ある時間に変える
          </h1>
          <p className="hero-subtitle">退屈な移動が、学びに。発見に。収益に。</p>
          <div className="hero-cta">
            <a href="#features" className="btn btn-primary">機能を見る</a>
            <a href="#business" className="btn btn-secondary">事業者向け資料</a>
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">365</div>
              <div className="stat-label">年間移動時間（時間）</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">その価値（円）</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">?</div>
              <div className="stat-label">もったいない</div>
            </div>
          </div>
        </div>
      </section>

      {/* 問題提起 */}
      <section id="problem" className="problem">
        <div className="container">
          <h2 className="section-title">
            毎日の移動、<br />退屈じゃないですか？
          </h2>
        </div>
        <div className="container">
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon">📖</div>
              <h3>本は揺れて読めない</h3>
              <p>電車やバスの揺れで、文字を追うのも一苦労</p>
            </div>
            <div className="problem-item">
              <div className="problem-icon">📝</div>
              <h3>勉強もできない</h3>
              <p>集中できる環境じゃない、時間も中途半端</p>
            </div>
            <div className="problem-item">
              <div className="problem-icon">📱</div>
              <h3>SNSを見るだけ</h3>
              <p>気づけばただスクロールしてるだけの時間</p>
            </div>
          </div>
          <div className="problem-conclusion">
            <p>1日1時間の移動 × 365日 = <strong>年間365時間</strong></p>
            <p className="problem-highlight">この時間、もったいなくないですか？</p>
          </div>
        </div>
      </section>

      {/* 機能セクション */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">3つのシンプルな機能</h2>

          {/* 機能1 */}
          <div className="feature-block">
            <div className="feature-content">
              <div className="feature-number">01</div>
              <h3 className="feature-title">移動時間に最適化されたコンテンツ</h3>
              <p className="feature-description">
                15分の移動には、15分で完結するコンテンツ。<br />
                30分の移動には、30分で完結するコンテンツ。<br /><br />
                音声、動画、記事からAIが自動選択。<br />
                揺れても大丈夫、中途半端に終わらない。
              </p>
              <ul className="feature-list">
                <li>ポッドキャスト</li>
                <li>オーディオブック</li>
                <li>短編動画</li>
                <li>記事朗読</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="phone-mockup">
                <div className="mockup-content">
                  <div className="mockup-header">今日の移動：15分</div>
                  <div className="mockup-suggestion">
                    <div className="content-card">
                      <div className="content-icon">🎧</div>
                      <div className="content-title">15分で聞ける落語</div>
                      <div className="content-time">15:00</div>
                    </div>
                    <div className="content-card">
                      <div className="content-icon">📚</div>
                      <div className="content-title">推理小説の朗読</div>
                      <div className="content-time">14:30</div>
                    </div>
                    <div className="content-card">
                      <div className="content-icon">💼</div>
                      <div className="content-title">ビジネスPodcast</div>
                      <div className="content-time">15:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 機能2 */}
          <div className="feature-block reverse">
            <div className="feature-content">
              <div className="feature-number">02</div>
              <h3 className="feature-title">移動するほど得する</h3>
              <p className="feature-description">
                移動するたびにデータが蓄積され、ポイントが貯まる。<br />
                貯まったポイントは、次の交通費割引やコンテンツ購入に使える。<br /><br />
                「無駄な時間」が「お金を生む時間」に変わる。
              </p>
              <div className="rewards-showcase">
                <div className="reward-item">
                  <div className="reward-value">+50pt</div>
                  <div className="reward-desc">15分の移動</div>
                </div>
                <div className="reward-item">
                  <div className="reward-value">+100pt</div>
                  <div className="reward-desc">30分の移動</div>
                </div>
                <div className="reward-item">
                  <div className="reward-value">-500pt</div>
                  <div className="reward-desc">交通費100円OFF</div>
                </div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="phone-mockup">
                <div className="mockup-content">
                  <div className="points-display">
                    <div className="points-total">2,450pt</div>
                    <div className="points-label">累計ポイント</div>
                  </div>
                  <div className="history-list">
                    <div className="history-item">
                      <span>今日の通勤</span>
                      <span className="points-earned">+100pt</span>
                    </div>
                    <div className="history-item">
                      <span>昨日の通勤</span>
                      <span className="points-earned">+100pt</span>
                    </div>
                    <div className="history-item">
                      <span>週末の移動</span>
                      <span className="points-earned">+150pt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 機能3 */}
          <div className="feature-block">
            <div className="feature-content">
              <div className="feature-number">03</div>
              <h3 className="feature-title">毎日、新しい発見</h3>
              <p className="feature-description">
                AIが「今日はこのルートどう？」と提案。<br />
                知らなかったカフェ、本屋、公園を発見。<br /><br />
                いつもの通勤が、小さな冒険に変わる。
              </p>
              <div className="discovery-example">
                <div className="route-card">
                  <div className="route-label">いつものルート</div>
                  <div className="route-time">20分</div>
                  <div className="route-status">混雑</div>
                </div>
                <div className="route-arrow">→</div>
                <div className="route-card highlight">
                  <div className="route-label">おすすめルート</div>
                  <div className="route-time">25分</div>
                  <div className="route-status">空いてる + カフェ発見</div>
                </div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="phone-mockup">
                <div className="mockup-content">
                  <div className="map-view">
                    <div className="map-marker">📍 あなた</div>
                    <div className="map-path"></div>
                    <div className="map-discovery">☕️ 隠れ家カフェ</div>
                    <div className="map-destination">🎯 目的地</div>
                  </div>
                  <div className="discovery-badge">新しい発見！</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業者向けセクション */}
      <section id="business" className="business">
        <div className="container">
          <h2 className="section-title">事業者の皆様へ</h2>
          <p className="section-subtitle">
            MoveMintは、移動中の時間を「価値ある時間」に変えるプラットフォームです
          </p>

          <div className="business-grid">
            <div className="business-card">
              <div className="business-icon">🎵</div>
              <h3>コンテンツ事業者様</h3>
              <ul>
                <li>移動中という確実な消費時間に配信</li>
                <li>時間最適化で高いエンゲージメント</li>
                <li>新規ユーザー獲得</li>
              </ul>
              <div className="business-metric">
                <span className="metric-label">予想CVR</span>
                <span className="metric-value">+35%</span>
              </div>
            </div>

            <div className="business-card">
              <div className="business-icon">🚇</div>
              <h3>交通事業者様</h3>
              <ul>
                <li>混雑緩和、顧客満足度向上</li>
                <li>需要予測・最適化データ</li>
                <li>新たな付加価値サービス</li>
              </ul>
              <div className="business-metric">
                <span className="metric-label">混雑緩和</span>
                <span className="metric-value">-20%</span>
              </div>
            </div>

            <div className="business-card">
              <div className="business-icon">☕️</div>
              <h3>店舗・施設様</h3>
              <ul>
                <li>自然な送客、新規顧客獲得</li>
                <li>移動ルートの延長線上で集客</li>
                <li>データドリブンな出店計画</li>
              </ul>
              <div className="business-metric">
                <span className="metric-label">送客効果</span>
                <span className="metric-value">+50人/日</span>
              </div>
            </div>

            <div className="business-card">
              <div className="business-icon">🏛️</div>
              <h3>自治体様</h3>
              <ul>
                <li>リアルな人流データ収集</li>
                <li>都市計画への活用</li>
                <li>交通政策の最適化根拠</li>
              </ul>
              <div className="business-metric">
                <span className="metric-label">データ精度</span>
                <span className="metric-value">95%+</span>
              </div>
            </div>
          </div>

          <div className="business-cta">
            <a href="#contact" className="btn btn-primary">資料請求</a>
            <a href="#contact" className="btn btn-secondary">導入相談</a>
          </div>
        </div>
      </section>

      {/* 技術セクション */}
      <section id="technology" className="technology">
        <div className="container">
          <h2 className="section-title">オープンデータ × AI</h2>
          <p className="section-subtitle">交通オープンデータチャレンジ 2024</p>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>使用データ</h3>
              <ul>
                <li>GTFS（公共交通データ）</li>
                <li>リアルタイム運行情報</li>
                <li>混雑情報API</li>
                <li>地理空間データ</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>AI技術</h3>
              <ul>
                <li>移動パターン学習</li>
                <li>コンテンツマッチング</li>
                <li>ルート最適化</li>
                <li>需要予測</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>データ活用</h3>
              <ul>
                <li>個人データは完全匿名化</li>
                <li>統計データのみ提供</li>
                <li>GDPR準拠</li>
                <li>透明性の確保</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">移動を、価値ある時間に</h2>
          <p className="cta-subtitle">新しい移動体験を、一緒に作りませんか</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary-large">お問い合わせ</a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">MoveMint</div>
            <p className="footer-tagline">移動を、価値ある時間に変える</p>
            <p className="footer-credit">交通オープンデータチャレンジ 2025</p>
          </div>
        </div>
      </footer>
    </>
  )
}