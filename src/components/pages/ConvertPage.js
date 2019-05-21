import React, { Component } from 'react';
import { Container, Header, Divider, Form, Button, Message, Modal } from 'semantic-ui-react';
import IFrame from '../IFrame';
import { connect } from 'react-redux';

import { convert, convertError, xmlSelected, xsltSelected } from '../../actions/convert';

class ConvertPage extends Component {
  constructor(props) {
    super(props);
    this.xmlFileInputRef = React.createRef();
    this.xsltFileInputRef = React.createRef();
  }

  htmlHandle = () => {
    var decodedData = window.atob(this.props.state.convert.response.result.htmlContent);
    return decodedData;
  };

  xmlFileChange = event => {
    let selectedFile = event.target.files;
    let file = null;
    if (selectedFile.length > 0) {
      let fileToLoad = selectedFile[0];
      new Promise(resolve => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(fileToLoad);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }).then(fileByte => {
        file = fileByte.split(',')[1];
        this.props.xmlSelected(file);
      });
    }
  };

  xsltFileChange = event => {
    let selectedFile = event.target.files;
    let file = null;
    if (selectedFile.length > 0) {
      let fileToLoad = selectedFile[0];
      new Promise(resolve => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(fileToLoad);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }).then(fileByte => {
        file = fileByte.split(',')[1];
        this.props.xsltSelected(file);
      });
    }
  };

  onSubmit = e => {
    const error = this.validate();
    if (error !== '') {
      this.props.convertError(error);
      return;
    }
    this.props.convert(this.props.state.convert.request);
    return;
  };

  validate = () => {
    let error = '';
    if (!this.props.state.convert.request.source) {
      error = 'Please select xml source';
    }
    return error;
  };

  render() {
    return (
      <Container textAlign="left" fluid>
        <Header as="h2">CONVERTER</Header>
        <p>Convert Page Descriptions</p>
        <Divider hidden />

        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Button
              type="button"
              fluid
              color="linkedin"
              size="massive"
              content="SELECT XML FILE"
              labelPosition="left"
              icon="file"
              onClick={() => this.xmlFileInputRef.current.click()}
            />
            <input ref={this.xmlFileInputRef} type="file" hidden onChange={this.xmlFileChange} />
          </Form.Group>
          <Form.Group>
            <Divider hidden />
            <Button
              type="button"
              fluid
              color="instagram"
              size="massive"
              content="SELECT XSLT FILE"
              labelPosition="left"
              icon="file"
              onClick={() => this.xsltFileInputRef.current.click()}
            />
            <input ref={this.xsltFileInputRef} type="file" hidden onChange={this.xsltFileChange} />
          </Form.Group>

          <Divider />
          <Button
            fluid
            size="massive"
            color="google plus"
            content="CONVERT"
            labelPosition="left"
            icon="upload"
            type="submit"
          />
        </Form>

        {this.props.state.convert.response.errorMessage && (
          <Container>
            <Divider />
            <Message negative>
              <Message.Header>We're sorry we can't convert</Message.Header>
              <p>{this.props.state.convert.response.errorMessage}</p>
            </Message>
          </Container>
        )}

        {this.props.state.convert.response.result.htmlContent && (
          <div>
            <Divider />
            <Modal
              basic
              size="large"
              trigger={
                <Button
                  fluid
                  size="massive"
                  color="green"
                  content="PREVIEW"
                  labelPosition="left"
                  icon="eye"
                  type="submit"
                />
              }
            >
              <Modal.Header icon="eye">Preview</Modal.Header>
              <Modal.Content image>
                <IFrame title="Preview" content={this.htmlHandle()} />
              </Modal.Content>
            </Modal>
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = {
  convert,
  convertError,
  xmlSelected,
  xsltSelected
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConvertPage);
