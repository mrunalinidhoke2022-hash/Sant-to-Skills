# Sant to Skill – App package

## Open and install the app on supported devices
This repository is configured to publish the PWA to GitHub Pages whenever a commit is pushed to `main`.
1. In the GitHub repository, open **Settings → Pages** and set the build/deployment source to **GitHub Actions**.
2. Push the app files and `.github/workflows/pages.yml` to `main`; the workflow builds and deploys the app.
3. When the deployment finishes, open `https://mrunalinidhoke2022-hash.github.io/Sant-to-Skills/` on your phone.
4. Use the in-app **Install app** button for device-specific steps. Android: use Chrome’s **Install app** or **Add to Home screen**. iPhone/iPad: use Safari **Share → Add to Home Screen**. Windows/Linux: use Chrome or Edge **Install**. macOS: use Chrome/Edge **Install** or Safari **File → Add to Dock**.

The same HTTPS address opens the responsive web app on phones, tablets, laptops, and desktop computers. Installation prompts are controlled by each browser and operating system, so they are not available everywhere. Most smartwatches do not support installing PWAs; watch-browser and audio capabilities vary by model.

## Option A: Installable app (PWA), the fastest, free
1. Upload this whole folder to any HTTPS host: Netlify Drop (drag & drop the folder), GitHub Pages, or Vercel.
2. Open the link on your phone in Chrome (Android) or Safari (iPhone).
3. Android: tap "📲 Install app" (or menu > Install app). iPhone: Share > Add to Home Screen.
It then opens full-screen like an app, with its own icon, and works offline.

## Verse library and read-aloud
- The library currently organizes the six starter examples for Sant Tukaram, Samarth Ramdas (Manache Shlok), and Sant Dnyaneshwar into Sant and composition tabs with levels.
- A separate **Manache Shlok** section includes all 205 numbered Marathi stanzas from the text supplied for this app, grouped into eleven sections (1–20 through 181–200, plus 201–205). Select a section to browse its numbered verses, apply reflection-theme filters, move between verses, or play the selected section aloud. The supplied text's edition and spelling have not been independently verified.
- Each Shlok includes a brief app-authored Marathi and English explanation. These are paraphrases, not literal or authoritative translations. The original stanza is shown before both meanings when read aloud.
- The reader includes an original animated cat mascot. Browser/device speech reads the verse and both explanations aloud; it does not sing and does not use an AI voice service.
- Tap a verse line to read it and its meaning aloud using the browser/device speech engine. Available Marathi, English, or Hindi voices depend on the device; install a Marathi speech voice in device settings if needed.
- The **Listen** section provides a spoken playlist with play, pause, next, previous, and stop controls. It reads the original verse with the device voice; these are not sung or recorded music tracks. Some browsers pause speech in the background or when the screen locks. Smartwatch support is limited and should not be assumed.
- This starter collection is not the complete works of these Sants. Add and verify verses against a chosen source/edition before publishing a larger collection.
- The current app uses device speech. Connecting a hosted AI text-to-speech provider later requires a backend; keep provider API keys on the server and never in `index.html`.

## Option B: Android APK / Play Store (via PWABuilder, no coding)
1. Host the folder (Option A).
2. Go to pwabuilder.com, paste your link, then choose Android and download the package.
3. Sign and upload the .aab to Google Play Console.

## Option C: Native wrapper with Capacitor (Android Studio / Xcode needed)
    npm install
    npm run build
    npx cap add android      # and/or: npx cap add ios
    npx cap sync
    npx cap open android     # builds APK/AAB in Android Studio

## Notes
- `npm run build` creates the static `dist/` folder used by GitHub Pages and Capacitor.
- Accounts, OTP and photos are still demo-only (stored on the device). Before a public release, connect a real backend (e.g. Firebase Auth / Twilio Verify) for SMS OTP and secure accounts.
- Change appId in capacitor.config.json to your own, e.g. com.yourschool.santtoskill.
