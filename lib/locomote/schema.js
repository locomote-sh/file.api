/* 
   Copyright 2019 Locomote Ltd.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

const Schema = {
    version: 1,
    stores: {
        'files': {
            options: {
                keyPath: 'path'
            },
            indexes: {
                'category': {
                    keyPath: 'category',
                    options: { unique: false }
                },
                'status': {
                    keyPath: 'status',
                    options: { unique: false }
                },
                'page.collection': {
                    keyPath: 'page.collection',
                    options: { unique: false }
                },
                'commit': {
                    keyPath: 'commit',
                    options: { unique: false }
                }
            }
        }
    }
}

exports.Schema = Schema;

/**
 * Make a copy of the default content origin file DB schema with the
 * specified file DB name.
 * @param name  The file DB name.
 */
exports.makeSchema = function( name ) {
    return Object.assign({ name }, Schema );
}

