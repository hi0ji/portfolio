import BackButton from '@/components/BackButton';
import { terminalScript } from '@/constants/constants';
import type { TerminalLine } from '@/types/types';
import { useState, useEffect, useRef } from 'react';

const Skills = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTypingCommand, setIsTypingCommand] = useState(false);
    
    // Interactive State
    const [userInput, setUserInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const isScriptComplete = currentLineIndex >= terminalScript.length;

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [displayedLines, currentText, userInput]);

    // Initial Script Logic
    useEffect(() => {
        if (!isVisible) return;
        
        // Slight delay before starting the script
        const startTimeout = setTimeout(() => {
        processNextLine();
        }, 1000);

        return () => clearTimeout(startTimeout);
    }, [isVisible]);

    const processNextLine = () => {
        if (currentLineIndex >= terminalScript.length) return;

        const line = terminalScript[currentLineIndex];

        if (line.type === 'command') {
        setIsTypingCommand(true);
        typeCommand(line.text, 0);
        } else {
        // Output lines appear instantly or with very short delay
        setIsTypingCommand(false);
        setTimeout(() => {
            setDisplayedLines(prev => [...prev, line]);
            setCurrentLineIndex(prev => prev + 1);
        }, 150); // Speed of output lines
        }
    };

    const typeCommand = (fullText: string, charIndex: number) => {
        if (charIndex <= fullText.length) {
        setCurrentText(fullText.slice(0, charIndex));
        setTimeout(() => {
            typeCommand(fullText, charIndex + 1);
        }, 50); // Typing speed for commands
        } else {
        // Command finished typing
        setTimeout(() => {
            setDisplayedLines(prev => [...prev, { ...terminalScript[currentLineIndex], text: fullText }]);
            setCurrentText('');
            setIsTypingCommand(false);
            setCurrentLineIndex(prev => prev + 1);
        }, 300); // Pause after command before output
        }
    };

    // Continue processing loop for script
    useEffect(() => {
        if (currentLineIndex > 0 && currentLineIndex < terminalScript.length && !isTypingCommand) {
        processNextLine();
        }
    }, [currentLineIndex, isTypingCommand]);

    // Focus input when script finishes
    useEffect(() => {
        if (isScriptComplete) {
        setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isScriptComplete]);

    // Interactive Handlers
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
        const newLine: TerminalLine = { text: userInput, type: 'command' };
        setDisplayedLines(prev => [...prev, newLine]);
        setUserInput('');
        }
    };

    const handleContainerClick = () => {
        if (isScriptComplete) {
        inputRef.current?.focus();
        }
    };
    return (
        <section className='w-full min-h-screen pt-24 pb-12 px-4 md:px-8 flex items-center justify-center bg-[#050505] overflow-hidden'>
            
            {/* back button */}
            <BackButton />
            
            {/* terminal window */}
            <div
                className={`w-full max-w-5xl aspect-video md:aspect-[16/9] lg:h-[80vh] flex flex-col bg-[#0c0c0c] rounded-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onClick={handleContainerClick}
            >
                {/* title bar */}
                <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-4 border-b border-white/5 select-none">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="font-mono text-xs md:text-sm text-gray-400">user — -zsh — 80x24</span>
                    </div>
                    <div className="w-16"></div>
                </div>
                
                {/* terminal content */}
                <div className="flex-1 p-6 md:p-8 font-mono text-sm md:text-lg overflow-y-auto scrollbar-hide cursor-text">
                    <div className="flex flex-col gap-1">
                        
                        {/* Render history */}
                        {displayedLines.map((line, index) => (
                        <div key={index} className={`${line.type === 'command' ? 'mb-2 mt-4' : ''} break-words`}>
                            {line.type === 'command' ? (
                            <div className="text-white">
                                <span className="text-pink-500 mr-2">➜</span>
                                <span className="text-cyan-400 mr-2">~</span>
                                {/* Clean up the hardcoded prompt from script if present, otherwise just show text */}
                                {line.text.startsWith('user@portfolio:~$ ') 
                                ? line.text.replace('user@portfolio:~$ ', '') 
                                : line.text}
                            </div>
                            ) : (
                            <div className={`${line.color || 'text-gray-300'}`}>
                                {line.text}
                            </div>
                            )}
                        </div>
                        ))}

                        {/* Current Script Typing Line */}
                        {isTypingCommand && (
                        <div className="text-white mb-2 mt-4 break-words">
                            <span className="text-pink-500 mr-2">➜</span>
                            <span className="text-cyan-400 mr-2">~</span>
                            <span>{currentText.replace('user@portfolio:~$ ', '')}</span>
                            <span className="animate-pulse inline-block w-2.5 h-5 bg-gray-500 ml-1 align-middle"></span>
                        </div>
                        )}

                        {/* User Input Line (Interactive) */}
                        {isScriptComplete && (
                        <div className="text-white mt-4 break-words relative">
                            <span className="text-pink-500 mr-2">➜</span>
                            <span className="text-cyan-400 mr-2">~</span>
                            <span>{userInput}</span>
                            <span className="animate-pulse inline-block w-2.5 h-5 bg-gray-500 ml-1 align-middle"></span>
                        </div>
                        )}
                        
                        {/* Hidden Input for capturing keystrokes */}
                        <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="opacity-0 absolute w-px h-px overflow-hidden -z-10"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        />

                        <div ref={bottomRef} />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills