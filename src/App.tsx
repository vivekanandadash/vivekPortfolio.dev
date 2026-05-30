/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import type { ExperienceMode } from './types';
import ModeSelector from './components/ModeSelector';
import TerminalMode from './components/TerminalMode';
import GuiMode from './components/GuiMode';

export default function App() {
  const [mode, setMode] = useState<ExperienceMode>('selector');

  return (
    <div className="w-full min-h-screen bg-[#080808] transition-colors duration-300">
      {mode === 'selector' && (
        <ModeSelector onSelectMode={(selected) => setMode(selected)} />
      )}
      
      {mode === 'terminal' && (
        <TerminalMode 
          onBack={() => setMode('selector')} 
          onSwitchToGui={() => setMode('gui')} 
        />
      )}
      
      {mode === 'gui' && (
        <GuiMode 
          onBack={() => setMode('selector')} 
          onSwitchToTerminal={() => setMode('terminal')} 
        />
      )}
    </div>
  );
}
