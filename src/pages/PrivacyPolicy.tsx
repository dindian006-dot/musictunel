import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, EyeOff, ServerOff, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            Privacy First
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-zinc-900 dark:text-white">Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none space-y-8 text-zinc-600 dark:text-zinc-400">
            <p className="text-lg leading-relaxed">
              Last updated: March 15, 2026. Your privacy is critically important to us. At MusicTunel, we have a few fundamental principles:
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5">
                <EyeOff className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mb-4" />
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">No Tracking</h3>
                <p className="text-sm">We don't ask for your personal information unless we truly need it. We don't track your listening habits.</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5">
                <ServerOff className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-4" />
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">Local Storage</h3>
                <p className="text-sm">Your settings, favorites, and downloads are stored locally on your device, not on our servers.</p>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">1. Data Collection</h2>
              <p>
                MusicTunel does not collect, store, or share any personal information. We do not use any third-party analytics or tracking tools. The app operates entirely on your device and communicates directly with music providers to fetch content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">2. Third-Party Services</h2>
              <p>
                MusicTunel streams content from YouTube Music. When you use the app, you are interacting with YouTube's services. Their privacy policy and terms of service apply to the content being streamed. MusicTunel does not provide any user data to these services beyond what is necessary to fetch the music streams.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">3. Permissions</h2>
              <p>
                The app may request permissions such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Storage:</strong> To save downloaded music and cache album art.</li>
                <li><strong>Network:</strong> To stream music and fetch metadata.</li>
                <li><strong>Notifications:</strong> To show playback controls in the notification shade.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">4. Open Source Transparency</h2>
              <p>
                As an open-source project, our code is available for public audit. You can verify exactly how your data is handled by reviewing our source code on GitHub.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">5. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
