describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Input changes when volume slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    }); 
  });

  it('Volume changes when volume slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    }); 
  });

  it('Image and sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes to 3 when setting volume > 66', () => {
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume image changes to 2 when setting volume > 33', () => {
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes to 1 when setting volume > 0', () => {
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes to 0 when setting volume to 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Honk button is disabled when the texbox input is non-number', () => {
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Honk button is disabled when the texbox input is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Error is shown when you type a number < 0 in the volume textbox input', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number:invalid').should('exist');
    cy.get('#volume-number').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be greater than or equal to 0.');
    });
  });

  it('Error is shown when you type a number > 100 in the volume textbox input', () => {
    cy.get('#volume-number').clear().type('111');
    cy.get('#volume-number:invalid').should('exist');
    cy.get('#volume-number').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be less than or equal to 100.');
    });
  });

});
