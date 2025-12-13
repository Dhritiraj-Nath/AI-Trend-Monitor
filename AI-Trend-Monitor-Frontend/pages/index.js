// pages/index.js
import Head from 'next/head';

export default function TrendMonitorReport() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#111', color: '#fff' }}>
      <Head>
        <title>AI Trend Monitor Pro UI</title>
      </Head>

      <header style={{ width: '80%', padding: '20px 0', borderBottom: '1px solid #333', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0, color: '#00F0FF', textShadow: '0 0 10px #00F0FF80' }}>
          <span style={{fontWeight: 300}}>GLOBAL</span> TREND MONITOR
        </h1>
      </header>

      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '80%', padding: '40px 0' }}>
        <div style={{ background: '#222', padding: '30px', borderRadius: '15px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)', border: '1px solid #444', transition: 'transform 0.3s ease-in-out', ':hover': { transform: 'translateY(-5px)' } }}>
            <h2 style={{ color: '#00FF99', marginBottom: '20px' }}>Data Pipeline Status</h2>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>✅ Kestra Orchestration: **READY**</p>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>🧠 Gemini Analysis: **ENABLED**</p>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>🚀 Vercel Deployment: **PENDING DATA**</p>
        </div>

        <p style={{ marginTop: '40px', color: '#AAA' }}>This interface will be updated with 3D/Animated reports soon.</p>
      </main>

    </div>
  );
}
