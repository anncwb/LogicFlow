import { computed, observable } from 'mobx';
import { Point } from '../../type';
import BaseNodeModel from './BaseNodeModel';
import { ModelType } from '../../constant/constant';
import GraphModel from '../GraphModel';
import { defaultTheme } from '../../constant/DefaultTheme';

class TextNodeModel extends BaseNodeModel {
  modelType = ModelType.TEXT_NODE;
  @observable fontSize = defaultTheme.text.fontSize;
  @observable fontFamily = defaultTheme.text.fontFamily;
  @observable fontWeight = defaultTheme.text.fontWeight;

  constructor(data, graphModel: GraphModel) {
    super(data, graphModel, 'text');
  }

  @computed get width(): number {
    return this.fontSize * this.text.value.length;
  }
  @computed get height(): number {
    return this.fontSize * 1.5;
  }
  @computed get anchors(): Point[] {
    return [];
  }
}

export { TextNodeModel };
export default TextNodeModel;
