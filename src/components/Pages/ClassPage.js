import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentClass } from '../../store/actions/class';
import DeckList from '../DeckList/DeckList';

function ClassPage(props) {
    const classId = props.match.params.id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentClass(classId));
    }, [classId]);

    const currentClass = useSelector(state => state.currentClass);
    let dateUpdated = new Date(currentClass.updatedAt);
    const decks = currentClass.decks;

    // todo - populate decklist and then add to the html below
    let decklist;

    if (decks) {
        decklist = decks.map(current => {
            return <li>{current.deckName}</li>
        })
    }

    if (currentClass.className) {
        return (
            <main class="main-content">
                <section id="class-header">
                    <div>
                        <h1>{currentClass.className}</h1>
                        <div class="caption">
                            <div id="author">
                                Author: {currentClass.owner.firstName} {currentClass.owner.lastName}
                            </div>
                            <div id="lastUpdated">
                                Last Updated: {dateUpdated.toDateString()}
                            </div>
                        </div>
                        <div class="class-metadata">
                            <div id="deck-count">{currentClass.decks.length} total decks in class</div>
                        </div>
                    </div>
                </section>
                <section class="flex-row flex-sb border-top border-bottom">
                    <h3>{currentClass.className} Decks</h3>
                    <button>New Deck</button>
                </section>
                <section>
                    <ul>
                        {decklist}
                    </ul>
                </section>
                {/* todo - complete modal and then refactor into its own class */}
                <div class="modal-container active" style={{ zIndex: 999999, backgroundColor: "d2d2d2" }}>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="modal-title">Add Deck</div>
                            <div id="modal-close"><button type="button">&times;</button></div>
                            <input type="text"></input>
                            <button type="button">Save</button>
                        </div>
                    </div>
                </div>
            </main>
        );
    } else {
        return <div>Loading...</div>
    }
}

export default ClassPage;