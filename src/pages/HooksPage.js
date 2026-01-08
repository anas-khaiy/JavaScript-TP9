import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import Clock from '../components/Clock';
import ExpensiveCalculation from '../components/ExpensiveCalculation';
import Stopwatch from '../components/Stopwatch';
import MeasureBox from '../components/MeasureBox';
import ImperativeDemo from '../components/ImperativeDemo';
import SearchWithTransition from '../components/SearchWithTransition';
import DeferredValueDemo from '../components/DeferredValueDemo';
import CustomHooksDemo from '../components/CustomHooksDemo';
import FocusInput from '../components/FocusInput';

function HooksPage() {
    return (
        <div>
            <h2>Démonstration des Hooks React</h2>
            <p>Cette page présente différents hooks React et leurs cas d'utilisation.</p>

            <div style={{ marginBottom: '20px' }}>
                <Link to="/" className="btn-link">Retour à l'accueil</Link>
            </div>

            <div className="hooks-grid">
                <div className="hook-section">
                    <Counter />
                </div>
                <div className="hook-section">
                    <Clock />
                </div>
                <div className="hook-section">
                    <ExpensiveCalculation />
                </div>
                <div className="hook-section">
                    <Stopwatch />
                </div>
                <div className="hook-section">
                    <MeasureBox />
                </div>
                <div className="hook-section">
                    <FocusInput />
                </div>
                <div className="hook-section">
                    <ImperativeDemo />
                </div>
                <div className="hook-section">
                    <SearchWithTransition />
                </div>
                <div className="hook-section">
                    <DeferredValueDemo />
                </div>
                <div className="hook-section" style={{ gridColumn: '1 / -1' }}>
                    <CustomHooksDemo />
                </div>
            </div>
        </div>
    );
}

export default HooksPage;
