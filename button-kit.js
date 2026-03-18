document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f7fb;
      color: #1f2937;
    }

    .kit-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px 60px;
    }

    .kit-title {
      font-size: 32px;
      margin: 0 0 10px;
    }

    .kit-subtitle {
      margin: 0 0 32px;
      color: #6b7280;
      font-size: 15px;
    }

    .kit-section {
      background: #ffffff;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }

    .kit-section h2 {
      margin: 0 0 8px;
      font-size: 22px;
    }

    .kit-section p {
      margin: 0 0 18px;
      color: #6b7280;
      font-size: 14px;
    }

    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }

    .demo-card {
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 16px;
      background: #fafafa;
    }

    .demo-card h3 {
      margin: 0 0 12px;
      font-size: 14px;
      color: #374151;
    }

    .demo-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }

    .kit-btn {
      border: none;
      border-radius: 10px;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 44px;
      text-decoration: none;
      user-select: none;
    }

    .kit-btn:disabled {
      cursor: not-allowed;
      opacity: 1;
    }

    /* PRIMARY */
    .btn-primary {
      background: #0148C0;
      color: #ffffff;
    }

    .btn-primary:hover {
      background: #013aa0;
    }

    .btn-primary:active,
    .btn-primary.is-pressed {
      background: #012b7a;
      transform: translateY(1px);
    }

    .btn-primary:disabled,
    .btn-primary.is-disabled {
      background: #a8b4c7;
      color: #f3f4f6;
    }

    /* SECONDARY */
    .btn-secondary {
      background: #ffffff;
      color: #0148C0;
      border: 2px solid #0148C0;
    }

    .btn-secondary:hover {
      background: #eef4ff;
    }

    .btn-secondary:active,
    .btn-secondary.is-pressed {
      background: #dbe9ff;
      transform: translateY(1px);
    }

    .btn-secondary:disabled,
    .btn-secondary.is-disabled {
      background: #f3f4f6;
      color: #9ca3af;
      border-color: #d1d5db;
    }

    /* GHOST / TERTIARY */
    .btn-ghost {
      background: transparent;
      color: #0148C0;
      border: 1px solid transparent;
    }

    .btn-ghost:hover {
      background: rgba(1, 72, 192, 0.08);
    }

    .btn-ghost:active,
    .btn-ghost.is-pressed {
      background: rgba(1, 72, 192, 0.16);
      transform: translateY(1px);
    }

    .btn-ghost:disabled,
    .btn-ghost.is-disabled {
      color: #9ca3af;
      background: transparent;
    }

    /* NAVIGATION */
    .btn-nav {
      background: #111827;
      color: #ffffff;
    }

    .btn-nav:hover {
      background: #1f2937;
    }

    .btn-nav:active,
    .btn-nav.is-pressed {
      background: #000000;
      transform: translateY(1px);
    }

    .btn-nav:disabled,
    .btn-nav.is-disabled {
      background: #9ca3af;
      color: #f3f4f6;
    }

    /* FAVORITE ACTIVE */
    .btn-favorite {
      width: 44px;
      height: 44px;
      padding: 0;
      border-radius: 10px;
      background: #ffffff;
      border: 2px solid #e5e7eb;
      color: #6b7280;
      font-size: 18px;
    }

    .btn-favorite:hover {
      background: #fff7e8;
      border-color: #ffd48a;
    }

    .btn-favorite:active {
      transform: translateY(1px);
    }

    .btn-favorite.is-active {
      color: #FFA500;
      border-color: #FFA500;
      background: #fff7e8;
    }

    .btn-icon {
      font-size: 16px;
      line-height: 1;
    }

    .legend {
      margin-top: 24px;
      padding: 16px;
      border-radius: 12px;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      font-size: 14px;
      color: #1e3a8a;
    }

    .legend strong {
      display: block;
      margin-bottom: 8px;
      color: #1d4ed8;
    }
  `;
  document.head.appendChild(style);

  const app = document.createElement('div');
  app.className = 'kit-page';

  app.innerHTML = `
    <h1 class="kit-title">Button Kit</h1>
    <p class="kit-subtitle">
      Marketplace button system: item actions, auth, navigation and upload actions.
      By Carl-Eric Sepp, Renat Magsumov
    </p>

    <section class="kit-section">
      <h2>Primary Buttons</h2>
      <p>Main actions: Contact Seller, Publish Item, Submit Report.</p>
      <div class="demo-grid">
        <div class="demo-card">
          <h3>Default</h3>
          <div class="demo-row">
            <button class="kit-btn btn-primary">Contact Seller</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Hover</h3>
          <div class="demo-row">
            <button class="kit-btn btn-primary" style="background:#013aa0;">Publish Item</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Pressed</h3>
          <div class="demo-row">
            <button class="kit-btn btn-primary is-pressed">Submit Report</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Disabled</h3>
          <div class="demo-row">
            <button class="kit-btn btn-primary" disabled>Submit Report</button>
          </div>
        </div>
      </div>
    </section>

    <section class="kit-section">
      <h2>Secondary Buttons</h2>
      <p>Secondary actions: Share, Save Item, Send Message.</p>
      <div class="demo-grid">
        <div class="demo-card">
          <h3>Default</h3>
          <div class="demo-row">
            <button class="kit-btn btn-secondary">Share</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Hover</h3>
          <div class="demo-row">
            <button class="kit-btn btn-secondary" style="background:#eef4ff;">Save Item</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Pressed</h3>
          <div class="demo-row">
            <button class="kit-btn btn-secondary is-pressed">Send Message</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Disabled</h3>
          <div class="demo-row">
            <button class="kit-btn btn-secondary" disabled>Share</button>
          </div>
        </div>
      </div>
    </section>

    <section class="kit-section">
      <h2>Ghost / Tertiary Buttons</h2>
      <p>Low-emphasis actions: Cancel, Report Item.</p>
      <div class="demo-grid">
        <div class="demo-card">
          <h3>Default</h3>
          <div class="demo-row">
            <button class="kit-btn btn-ghost">Cancel</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Hover</h3>
          <div class="demo-row">
            <button class="kit-btn btn-ghost" style="background:rgba(1,72,192,0.08);">Report Item</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Pressed</h3>
          <div class="demo-row">
            <button class="kit-btn btn-ghost is-pressed">Cancel</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Disabled</h3>
          <div class="demo-row">
            <button class="kit-btn btn-ghost" disabled>Report Item</button>
          </div>
        </div>
      </div>
    </section>

    <section class="kit-section">
      <h2>Navigation / Auth / Upload</h2>
      <p>Buttons for main navigation and account flows.</p>
      <div class="demo-grid">
        <div class="demo-card">
          <h3>Navigation</h3>
          <div class="demo-row">
            <button class="kit-btn btn-nav">Login</button>
            <button class="kit-btn btn-nav">Sign Up</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Upload</h3>
          <div class="demo-row">
            <button class="kit-btn btn-nav">Post Item</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Pressed</h3>
          <div class="demo-row">
            <button class="kit-btn btn-nav is-pressed">Login</button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Disabled</h3>
          <div class="demo-row">
            <button class="kit-btn btn-nav" disabled>Post Item</button>
          </div>
        </div>
      </div>
    </section>

    <section class="kit-section">
      <h2>Icon / Active State</h2>
      <p>Favorite button active state based on the project color <strong>#FFA500</strong>.</p>
      <div class="demo-grid">
        <div class="demo-card">
          <h3>Default</h3>
          <div class="demo-row">
            <button class="kit-btn btn-favorite" aria-label="Favorite">
              <span class="btn-icon">♡</span>
            </button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Hover</h3>
          <div class="demo-row">
            <button class="kit-btn btn-favorite" style="background:#fff7e8;border-color:#ffd48a;" aria-label="Favorite">
              <span class="btn-icon">♡</span>
            </button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Active</h3>
          <div class="demo-row">
            <button class="kit-btn btn-favorite is-active" aria-label="Favorite active">
              <span class="btn-icon">♥</span>
            </button>
          </div>
        </div>
        <div class="demo-card">
          <h3>Disabled</h3>
          <div class="demo-row">
            <button class="kit-btn btn-favorite" disabled aria-label="Favorite disabled">
              <span class="btn-icon">♡</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="legend">
      <strong>Used project-inspired actions:</strong>
      Contact Seller, Save Item, Share, Report Item, Cancel, Submit Report, Login, Sign Up, Post Item, Favorite Active State.
    </div>
  `;

  document.body.innerHTML = '';
  document.body.appendChild(app);
});