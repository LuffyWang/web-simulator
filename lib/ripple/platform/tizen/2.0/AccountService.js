/*
 *  Copyright 2012 Intel Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function (serviceName, serviceType, tag, displayName, icon, settings) {
    var _self,
        _id = Math.uuid(null, 16);

    _self = {
        serviceName : serviceName || "",
        serviceType : serviceType || "",
        displayName : displayName || null,
        icon : icon || null,
        settings : settings || null,
        tag : tag || []
    };

    _self.__defineGetter__("id", function () {
        return _id;
    });

    return _self;
};
