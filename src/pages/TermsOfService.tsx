import React from 'react';
import { motion } from 'motion/react';
import { Scale, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function TermsOfService() {
  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
            <Scale className="w-4 h-4" />
            Legal Terms
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-zinc-900 dark:text-white">Terms of Service</h1>
          
          <div className="prose dark:prose-invert max-w-none space-y-8 text-zinc-600 dark:text-zinc-400">
            <p className="text-lg leading-relaxed">
              By using MusicTunel, you agree to the following terms and conditions. Please read them carefully.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the MusicTunel application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">2. Description of Service</h2>
              <p>
                MusicTunel is a free, open-source music player for Android devices. It provides an interface to stream and organize music content from third-party providers. MusicTunel does not host any music content itself.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">3. User Conduct</h2>
              <p>
                You agree to use MusicTunel only for lawful, personal, and non-commercial purposes. You are responsible for complying with all local laws and regulations regarding online conduct and acceptable content.
              </p>
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 p-6 rounded-2xl not-prose">
                <h4 className="text-zinc-900 dark:text-white font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  Acceptable Use
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Personal music listening</li>
                  <li>• Creating private playlists</li>
                  <li>• Downloading for offline personal use</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">4. Intellectual Property</h2>
              <p>
                The MusicTunel application is open-source software. The content streamed through the app belongs to its respective copyright owners. Users are expected to respect the intellectual property rights of artists and content creators.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">5. Disclaimer of Warranties</h2>
              <p className="italic">
                MusicTunel is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted or error-free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">6. Limitation of Liability</h2>
              <p>
                In no event shall the developers of MusicTunel be liable for any damages arising out of the use or inability to use the application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">7. License</h2>
              <p>
                MusicTunel is licensed under the GPL-3.0 License. You are free to study, modify, and distribute the software in accordance with the terms of this license.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
